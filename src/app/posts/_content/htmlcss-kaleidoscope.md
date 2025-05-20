---
title: "HTML/CSS Kaleidoscope"
date: "24 July 2013"
topics: "Development, HTML/CSS, JavaScript"
archive: "true"
summary: "Experimented with HTML, CSS, and JavaScript to create a dynamic kaleidoscope"
---

Again, I was just having a little fun with HTML/CSS, this time I decided to make a kaleidoscope.

It was initially all created with just HTML/CSS using four image tags to make the end result but I’ve since decided to leverage Javascript to enhance it and to make the source HTML a little cleaner.

I now use one image tag and am using Javascript to create the four versions of it programmatically. I also decided to add a little animation to it and have set it up to cycle through images as a slideshow.

There are four different CSS3 driven animations which are selected randomly using a simple function:

```js
var animationType = function() {
	var animation_types = new Array('zoom-in', 'zoom-out', 'zoom-in-twist', 'x-slide', 'y-slide');
	return animation_types[Math.floor(Math.random()*animation_types.length)];
};
```

![](/assets/2013/kaleidoscope.jpg)

[View on CodePen](https://codepen.io/mraffaele/pen/QwwYzJo)
