---
title: "Birds with Media Queries"
date: "22 July 2013"
topics: "Development, HTML/CSS"
archive: "true"
summary: "Experimented with responsive design, using media queries to adapt minimal bird illustrations across breakpoints"
---

Here I was just having a little bit of fun with using media queries to show and hide birds and give the illusion of them landing and taking off from a cable. If you resize the browser's width you will see birds fly in from the left and land or fly out back to the left when the screen shrinks.

The birds were built in CSS and Javascript is used to detect when the birds need to turn around and face the left of screen (ie: when shrinking the windows). Javascript is also used to make random birds _hop_ at random intervals.

The keyframe animations have only been written to run in webkit. For now.

![](/assets/2013/birds.jpg)

[View on CodePen](https://codepen.io/mraffaele/pen/xbbMmaE)
