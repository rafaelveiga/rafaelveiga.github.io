---
title: "Automating YNAB with Node.js, Puppeteer and a little bit of Bull"
layout: post
tags: YNAB, automation
---

[YNAB](https://ynab.com) is a great financial tool that helps you budget your money. It's a web-based application that allows you to import transactions from your bank accounts and credit cards, and then categorize them into different budget categories. It's a great tool for keeping track of your spending and making sure you're staying within your budget.

One of the cool features of YNAB is that you can connect to your bank to automatically import transactions, saving you the manual labor of entering every single transaction by hand on the UI. Although it offers direct connection to a bunch of financial institutions, _my bank is not one of them_.

Based in Brazil, I don't see a future where [Plaid](https://plaid.com), the engine behind YNAB's bank connections, will support my bank. So I decided to automate the process of importing transactions into YNAB using Node.js and a little bit of Puppeteer. In this post I'll try to highlight the wrinks I've encountered during this process and how I've solved them.

---

## The plan

My bank also doesn't offer a way to export transactions through an API, so I had to resort to scraping the transactions from the web interface. The plan was to:

- Log in to my bank's website
- Navigate to the transactions page
- Download an .TXT file with the transactions
- Parse the .TXT file and gather the transactions that happened since the bot last ran
- Call YNAB API to import the transactions into the correct account
- Notify me through email that X transactions were imported

---

## Two accounts, two separate tasks

In my current YNAB setup, I have a "Credit Card" account that I use for all my credit card transactions. I also have a "Checking Account" that I use for all my debit card transactions. This meant specifying two tasks, one to gather transactions from my credit card and another to gather transactions from my checking account.

### Checking Account - Downloading the file using Puppeteer

So I've started by creating a function that would encompass the logic detailed above for my checking account.

```javascript
function fetchCheckingAccountTransactions() {
  const ofxPath = downloadTxtFile();
  const transactions = parseOfxFile(ofxPath);
  const newTransactions = filterNewTransactions(transactions);
  addTransactionsToYNAB(newTransactions);
  sendEmail(newTransactions);
}
```

The `downloadTxtFile` heavily relies on Puppeteer to navigate the bank's website, log in, and download the .TXT file. Unfortunately, this script is brittle and can break at any minute if the bank decides to change any classes or IDs on their website. But it's a risk I'm willing to take and its a risk for any web scraping project.

Since we are downloading a file, to customize Puppeteer's behavior on downloads, we need to call a custom method on the `page` object.

```javascript
const downloadPath = path.join(__dirname, "/downloads");

await page._client.send("Page.setDownloadBehavior", {
  behavior: "allow",
  downloadPath,
});
```

This allows us to specify a download path for the file we are about to download. This is important because we need to know where the file is saved to parse it later. The textfile is formatted in a simple manner:

```
2024-05-29;StoreName;-123.45;
2024-05-29;StoreName;-123.45;
2024-05-29;Deposit;123.45;
```

Parsing it was trivial. After that, it was just a matter of filtering the transactions that happened since the last time the bot ran and calling [YNAB's API](https://api.ynab.com/) to import the transactions. Success!

### Credit Card Account - Intercepting the network requests using Puppeteer

The credit card account was a bit trickier. The bank's website does not offer a .TXT export of the transactions. The data is also a little bit more complex, with transactions split between multiple credit cards.

To structure the task, I've done the same as the checking account. But instead of using Puppeteer to download a file, we use it to intercept the requests and get the raw JSON data that the website uses to render the transactions.

```javascript
let statement;

page.on("response", async (response) => {
  if (
    response.url().startsWith("https://my-bank") &&
    response.url().includes(".com.br/internal-api") &&
    response.request().method() === "POST" &&
    response.request().postData() === "section=MyCardTransactions"
  ) {
    statement = await response.json();
  }
});
```

In the code block above we heavily filter the network requests to only get the one that returns the JSON data we need. This also a bit brittle since the Internal API URL can change at any time. But at last, we have the data we need to parse and import into YNAB.

In the parsing stage there is some JSON wrangling, but I won't bore you with the specifics, since this is exclusive to my bank. The rest of the process is the same as the checking account: Parse, Filter, Import, Notify.

---

## Security

I've stored all my sensitive information necessary for logging in my bank account in a `.env` file and used `dotenv` to load it into the environment. This way I can keep my secrets out of the codebase and not worry about accidentally committing them to my private repository. The bot runs locally on my machine, so it is pretty contained.

---

## Scheduling the tasks

Since some tasks are brittle and can break sometimes, I've decided to use [Bull](https://optimalbits.github.io/bull/) to schedule the tasks. Bull is a Node.js library that allows you to create and manage job queues. It's a great tool for running tasks in the background and handling retries and failures. All you need is a Redis server running and you're good to go.

To start, I've created a Bull queue for each task:

```javascript
const checkingAccountQueue = new Bull("checkingAccountQueue");
const creditCardQueue = new Bull("creditCardQueue");
```

Then I've added the tasks to the queues on a cron schedule:

```javascript
checkingAccountQueue.add(<PARAMS>, {
  repeat: {
    cron: "0 7 * * *",
  },
  attempts: 5,
});

creditCardQueue.add(<PARAMS>, {
  repeat: {
    cron: "0 7 * * *",
  },
  attempts: 5,
});
```

Finally, I've created a worker for each queue that runs the task:

```javascript
checkingAccountQueue.process(fetchCheckingAccountTransactions);
creditCardQueue.process(fetchCreditCardTransactions);
```

Both tasks, the checking account and the credit card account, are scheduled to run every day at 7 AM and have up to 5 retries. There were some days where the bot failed to run because of network issues or the bank's website being down, but Bull handled the retries gracefully and the task eventually ran successfully. This made the automation more robust and reliable.

---

## Conclusion

Automating the process of importing transactions into YNAB has saved me a lot of time and effort. I no longer have to manually enter every single transaction into the UI, which was a tedious and error-prone process. I can finally experience a linked account experience on YNAB and have a better understanding of my finances.
