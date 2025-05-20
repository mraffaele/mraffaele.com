---
title: "Bayan – My first jQuery plugin"
date: "7 June 2011"
topics: "Development, jQuery"
archive: "true"
summary: "Released a simple jQuery plugin for toggling content. First attempt at packaging code for others"
---

I was working away on a website the other day which had quite a rich UI. Lots of nice effects such as datepickers, accordions, sliders etc. jQuery UI all but enabled me to smash them all out in one go and quite easily, with one exception:

### jQuery UI has no horizontal accordion
This caught me off guard as jQuery UI has most other UI elements you would usually need; including a vertical accordion. So the problem here was I needed to incorporate functionality for this new accordion without bloating the already heavy website’s file size even further. It also needed to be backwards compatible as far back as IE6.

Long story short I developed a small bit of javascript (using the jQuery library) that can get this up and running quite easily (<2kb).

I then decided I would put a little more time into it and create a plugin that anyone could use and customise. So here it is, my first jQuery plugin: ~~[Bayan](#)~~. I haven’t put that much time into it yet, but it seems to work well across all browsers, so if you notice any issues, let me know please.

### Here are just some of the features:
- Can support as many slides as you like. (Within the bounds of the container of course)
- Can support almost any type of content in the main slide area. Images, text, iFrames etc.
- Easily configurable animation speed
- Can be controlled by mouse click or on mouseover
- Next/previous slide buttons can be easily set up.
- The theme can be easily modified through CSS file

Have a look at my plugin, leave some comments and let me know what you think.