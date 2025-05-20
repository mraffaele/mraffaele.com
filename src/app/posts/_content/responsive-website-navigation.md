---
title: "Responsive Website Navigation"
date: "15 January 2013"
topics: "Development, HTML/CSS"
archive: "true"
summary: "Built a responsive navigation menu using only HTML and CSS. Lightweight, no JavaScript needed"
---

## What responsive menus are already out there?
There are already a good few posts around highlighting the positives and negatives of the various ways to handle navigation on smaller devices. Good solutions exist already such as [converting the menu to a dropdown](https://css-tricks.com/convert-menu-to-dropdown/) or the very common _‘toggle menu’_ using javascript as used here, here and in an abundance of other websites.

There are also a ton of jQuery plugins that can do it pretty well and automagically but I thought I’d walk through the way I decided to go about it and why.

## My approach
For this website I based mine off the toggle menu technique because it was the most common one I came across when considering my approach. The fact is, the approach is so common for a reason; and a simple one at that, it works very well.

The big selling point to me was that I didn’t want to have to output my navigation in a select menu and a list. The drawback to this approach is that it always seemed to require JavaScript to work, which in all fairness is not a big deal anymore, but if I can avoid using JavaScript, I will. There are alternate approaches to this click method such as using the :target pseudo class, but I wasn’t a big fan of that approach because honestly, it didn’t _feel_ right. I know, ridiculous, yet here we are.

For my approach I used a method previously used in my [Pure HTML/CSS3 Accordion](/posts/css-accordion-no-javascript_) article and examples. This is the checkbox and sibling selector method. Its very simple, I have a checkbox that when checked, the sibling (the ul in this case) is made visible and it is as easy as this:

```css
&:checked ~ ul {
	display:block;
}
```
### The Pros
1. No separate HTML menu needs to be outputted
2. No JavaScript required – all CSS


### The Cons
1. Will not work for older browsers (IE<9) which is not an issue really as its targeted for mobile devices

![Screenshot without css applied](/assets/2013/nav-with-css.png)![Screenshot without css applied](/assets/2013/nav-without-css.png)

## How To Integrate It Into Your Website
### The Markup
You need to write the HTML for your navigation. I’ve used a typical unordered list to enclose them in but you can always choose something else:

```html
<ul>
    <li><a href="#">Menu Item</a></li>
    <li><a href="#">Menu Item</a></li>
    <li><a href="#">Menu Item</a></li>
    <li><a href="#">Menu Item</a></li>
</ul>
```
 
Then we need to include the label and checkbox to control the actual toggle of the menu. I’ve also enclosed both and the unordered list in the <nav> tag:

```html
<nav>				
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle">Toggle Menu</label>
    <ul>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Menu Item</a></li>
    </ul>
</nav>
```

### The CSS
First lets do some simple styling for the navigation and hide the checkbox and navigation by default:

```css
/* Default Styling */
ul {
    display:none;
    overflow:hidden;
}
ul li {
    display:inline-block;
    padding:5px;
}
label {
    background:#238dad;
    color:#fff;
    cursor:pointer;
    display:block;
    padding:5px;
}
input {
    display:none;
}
```

Finally we need to add the CSS to show the menu when the checkbox is clicked.

 
```css
/* Default Styling */
ul {
    display:none;
    overflow:hidden;
}
ul li {
    display:inline-block;
    padding:5px;
}
label {
    background:#238dad;
    color:#fff;
    cursor:pointer;
    display:block;
    padding:5px;
}
input {
    display:none;
}

/* Toggle The Visibility */
input:checked ~ label {
    background:#ff8800;
}
input:checked ~ ul {
    display:block;
}
```

After that all you need to to is enclose it in the media queries so the styles only apply to resolutions you prefer and you’re good to go.

View on [JSFiddle](https://jsfiddle.net/m_raffaele/LADyX/)