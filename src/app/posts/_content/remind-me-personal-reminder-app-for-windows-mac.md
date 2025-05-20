---
title: "Remind Me - Personal reminder app for Windows & Mac"
date: "25 July 2018"
topics: "Development, JavaScript, React"
archive: "true"
summary: "Built a desktop app to nudge me into basic self-care"
---

## The What & The Why
As a developer I spend a lot of time at my computer. It’s easy to get deeply focused on my work forget the little things; little things like drinking enough water or stepping away from my desk.

For a while I’ve wanted an app that enables me to create and schedule these little reminders. I wanted something unobtrusive, flexible and simple. Many examples of apps like this exist, but most are for mobile and I wanted something for my desktop. So I’ve built something and creatively called it Remind Me.

~~At the time of writing you will have to get the source and compile it yourself, though I will probably package binaries shortly and create a release.~~

Edit: Release 1.0.0 is available [here](https://github.com/mraffaele/remindme/releases/tag/1.0.0)

![](/assets/2018/RemindMe.png)

## The Tech
Since I began working with React, I’ve only used either internal state or MobX for application state and everyone seems to talking about Redux and for FOMO I’ve decided it was about time I tried my hand at that.

So we’re talking a nice little bundle (thanks Webpack) of React, Redux and the lovely Typescript all beautified up by my friend SASS.

I’d also recently been interested in trying my hand at an exciting framework called Electron. Electron enables you to “Build cross platform desktop apps with JavaScript, HTML, and CSS” and has some impressive real world implementations – Slack, Atom and VSCode are all built using it.

I decided to learn both of these in the one go and build Remind Me as both a Windows and Mac application. The UX is a honestly little rough as I just wanted to get it working asap and will hopefully (maybe? possibly?) improve upon this but for now it does what its supposed to and right now that is enough for me.

Lots of learnings from working with both of these new (to me) technologies and I can absolutely see myself using Redux again going in to the future.

## My Reminders
Right now I have the following reminders set:

1. Drink Water – every 15 minutes
2. Get Up & Stretch – every hour
3. Walk Around The Block –  3:30pm every weekday
4. Log Work Hours – 5:15pm every weekday

[Download the latest version](https://github.com/mraffaele/remindme/releases/) - or - [View the app source](https://github.com/mraffaele/remindme)