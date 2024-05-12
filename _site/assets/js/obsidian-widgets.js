(async () => {
  // Fetch stargazers
  const response = await fetch(
    "https://api.github.com/repos/rafaelveiga/obsidian-widgets"
  );
  const data = await response.json();

  document.getElementById("stargazers-obsidian-widgets").innerText =
    data.stargazers_count;

  // Fetch total downloads
  const responseDownloads = await fetch(
    "https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json"
  );
  const dataDownloads = await responseDownloads.json();

  document.getElementById("downloads-obsidian-widgets").innerText =
    dataDownloads.widgets.downloads;
})();
