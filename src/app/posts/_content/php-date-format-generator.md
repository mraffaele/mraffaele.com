---
title: "PHP Date Format Generator"
date: "14 January 2012"
topics: "Development, PHP"
archive: "true"
summary: "Wrote a tool to visualize PHP date formats. Saves time and avoids repetitive guesswork"
---

### The Problem
When it comes to working with PHP I can never remember which characters to use when formatting a date.

The frustrating thing is I know that it is simple and in some cases very logical such as **d = day of the month with leading zeros** but the majority of them just don’t seem to stick. In all honesty most options won’t be used all that often apart from examples such as: day, month, year etc. You get the picture.

I am mostly dealing with dates shown on a front end level on blog posts etc so normally it really is as simple as **14 January 2012**:

```php
date('d F Y');
```

## What I have done about it
I created this a couple of months ago but actually forgot to upload it, basically I created a web based PHP Date Format Generator. Using this generator you have the ability to output the date in whichever format you like really easily. There are two way this can be achieved:

### Method 1: Using already complete date formats
There are a range of pre-made date formats you can choose from. Simply click on the example you like and the code and preview at the top will be updated automatically.

Note: Selecting a complete example will replace any date code you already have. It will also clear the undo queue.

![](/assets/2012/php-date-generator-1.jpg)

### Method 2: Building your own date format
The various individual date formats are presented in a list sorted by day, month, year and time.

Simply click on the format you like and it will be updated in the code and preview section. If you have any existing formats already there, it will simply be appended allowing you to build up you preferred date output.

Note: If you are using a pre-made example from above, it will be wiped and the undo queue cleared before adding your new option.

![](/assets/2012/php-date-generator-2.jpg)

When building your date you have an undo button in-case you make a mistake and you also have the ability to add punctuation. I have tried to make the buttons as obvious as possible, although if you are unsure what a button does, simply hover over it and a written description will be presented.

![](/assets/2012/php-date-generator-3.jpg)


Hopefully this little web-app can come in handy for anyone else who’s mind seems to draw a blank with when dealing with dates for some reason. Funny thing is, after working on this I can now remember them much, much easier. To give it a try, head on ~~[over](#)~~.

All the information regarding the PHP Date fomats was taken from php.net.