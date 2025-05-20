---
title: "Detecting if the jQuery Easing plugin is loaded"
date: "10 June 2011"
topics: "Development, jQuery"
archive: "true"
summary: "Quick snippet to check if the jQuery easing plugin is loaded. One of those quiet failures worth guarding against"
---

Lately I have been experimenting with creating jQuery plugins. For my first plugin, Bayan, I was asked to implement easing functionality in the next revision. There is a great jQuery easing plugin out there right now which is used quite regularly so I figured I would just support that instead of writing my own.

## The problem:
I ran into an issue pretty quickly, how do I check if it has been loaded? I need to know if the plugin isn’t loaded and disable the appropriate calls otherwise the animations would break. My thought was to check if the plugin exists and go from there. Normally to do this you can simply use:

```js
if($.fn.yourPluginName)
	alert("Great Success!");
```

The issue here though is that this easing function is native to jQuery, the easing plugin just extends it. So even without the plugin loaded, that if statement would return true.

## The solution:
What I noticed was at the start of this plugin there is a line which renames the default jQuery easing namespace of “swing” to “jswing”. This now enabled me to simply check if “jswing” existed and act accordingly. A simple solution, but one that is quite easy to miss. You can check if the namespace exists with the following:

```js
if(jQuery.easing["jswing"])
	alert("Great Success!");
```

I’m sure this isn’t the only solution there is, in fact I am not even sure if its the right one, but, it is a solution that works. If you know of any other ways this could be achieved please share it in the comments below.