---
title: "My journey learning and using the Sofle keyboard for software development"
layout: post
tags: keyboards, software-development
---

Inspired by [YellowAfterlife's post about their setup using the Sofle keyboard](https://yal.cc/sofle-keymap/) for software development, I've decided to document my journey on learning and using the Sofle keyboard as my main driver for software development.

It is rare to find experiences with this specific board and within the software development niche. In the end, everyone customizes their keybindings and layouts to their liking, but having posts like the one mentioned above helped me a lot to reach a consensus on what is the best layout for me.

## 2025-05-20 - Day "one"

I would call today as Day One but that would not be so honest of me. I've bought this keyboard on Aliexpress back in 2023, but never managed to dedicate the time and effort to actually learn it. Had two stints, one in 2023 and one in 2024, but eventually gave up after struggling to fixate its unorthodox layout. As I start my third attempt, I have in mind that this would not be an easy transition. I'm guesstimating that it will take me around 2~3 months to feel fully comfortable and productive.

My end goal is to use the Sofle as my daily driver. That includes (mostly) programming in Elixir and Javascript, writing Obsidian notes, typing both in English and Portuguese and sometimes, gaming. Currently (as of 2025-05-20), I'm switching to a 100% QWERTY default keyboard when I need to be most productive during the workday and using the Sofle during practice and study hours.

The first challenge is to find the exact layout that works best for me. I work mostly in Elixir and Typescript, so special characters for those languages needs to be easily acessible. I also type in Portuguese, so cramming special characters like ç and other accent marks like áêìõû into the layout is a must.

That also comes with the challenge of regaining my typing speed on such a different layout. Muscle memory will definitely settle with time, so before doing actual code in the Sofle, which requires numbers, special characters and all sorts of Vim motions to be internalized, I'm mostly practicing words and all 26 letters of the alphabet, while I'm still deciding where each special character will fit in my layers.

[MonkeyType](https://monkeytype.com) has been a fenomenal tool to gain speed in the Sofle. I'm currently scoring 70ish WPM in the 'words 50 english' test type. Still a few typos and double pressing keys, but I feel that the muscle memory is starting to settle in.

I'm also experimenting with home row mods and trying to wrap my brain around using the home row keys as GUI, Alt, Shift and Ctrl, specially after years using the peripheral keys on a standard keyboard to perform these exact same functions. [DreamsOfCode has an excellent video](https://www.youtube.com/watch?v=sLWQ4Gx88h4) on how to setup home row mods.

## 2025-05-25 - Settled on a layout

I've finally settled on a layout. Stumbled upon [this post](https://keymapdb.com/keymaps/ranzq/) on Keymap DB that gives a very cool symbol layer layout for the Sofle. I've mixed and matched that with [my current layout](https://github.com/rafaelveiga/sofle) and I think I've reached stability. It is time to train muscle memory and fixating that layout into my brain.

Keep in mind that this took a loot of trial and error. Changing key mappings to different places until it felt "right". This reinforces the idea that every experience with one of these boards is unique. We might struggle with some common problems, but at the end, unique problems will arise to everyone.

## 2025-06-01 - Feeling the benefits

Spending almost every hour while studying and coding personal projects with the Sofle now. I feel that I am more comfortable on the first layer than ever before. Still struggling with, from most annoying to least:

- pressing Ctrl instead of Shift using the home row mods.
- confusing Enter for Space (they are mirrored on each half of the keyboard, so it is the same motion on the thumb, but on opposite hands)
- the symbols layer (I still haven't fixed their position)
- accidentaly pressing double keys

Regarding the confusion with the home row mods, it happens mostly when I'm Capitalizing Words. Currently, it is common for me to press Ctrl+T instead of typing a word with capital T. Every program that I use has a different shortcut bound to a Ctrl+Key, so I had a bunch of things happening to me: Opening a new tab to deleting a piece of code that I've just written.

Confusing Enter for Space is one of the most annoying things ever. Most messaging apps on Desktop, specially WhatsApp Web, bind the enter key to Send Message. That caused me to send incomplete messages, because I thought that I was pressing Space instead of Enter. I'm thinking of adding a Key Combo and map the two thumb keys to space, and when I press both of them, it outputs Enter. This will keep me mostly safe from sending unfinsihed messages, but it adds an extra finger in `<Esc>:w<Enter>` to save files.

The symbols layer confusion is most apparent during programming. If you mix that with Vim motions, it is easy to get into a state where you are completely lost and deleting words and inserting lines randomly. Still think this will take time to fully incorporate into muscle memory.

I assume that pressing double keys comes from it's ortholinear layout and my fingers being so used to travel diagonally to reach certain keys on a traditional keyboard.

I've learned about [Caps Word](https://docs.qmk.fm/features/caps_word), which has a lot of potential since I'm esporadically typing CONST_NAMES in code. Haven't found a way to implement that purely with Vial yet.

Either way, I'm starting to feel the benefits. I feel that my hands move less and that I am in a more natural position while using the computer.
