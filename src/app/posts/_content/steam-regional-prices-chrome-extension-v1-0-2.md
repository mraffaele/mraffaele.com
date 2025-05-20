---
title: "Steam Regional Prices Chrome Extension v1.0.2"
date: "16 September 2011"
topics: "Development, Gaming"
archive: "true"
summary: "Built a Chrome extension to show Steam prices across countries. Practical and driven by curiosity"
---

Approximately a week ago I launched my first ever Chrome Browser Extension with an accompanying website, it is called Steam All Region Price Checker (ARPC). The purpose of this extension is to allow you to check the prices for all regions of a Steam game simultaneously without leaving the current page you are on.

## The Chrome Extension
As I mentioned the Chrome extension allows the user to check the the prices of any Steam game across all regions simultaneously. I initially created this extension for personal use but then decided I would share it with anyone who wants it. You simply install the extension and you have a couple of ways to view it.

1. Current Page: Load up a game page on steam, right click somewhere blank on the page and select “Look up current page”
2. External Page: Right click on any Steam game url (eg: [Portal 2](http://store.steampowered.com/app/620/)) and select “Look up price for…”
 
![](/assets/2011/steam-01.jpg)
![](/assets/2011/steam-02.jpg)

You can see the chrome extension [here](https://chromewebstore.google.com/detail/steam-all-region-price-ch/mopoebekmlkmahpfjjgibkbnciooimhn).

## The Website
The website was an afterthought to the extension so there isn’t really all that much to it; however it serves two puposes.

1. It provides anyone the ability to paste a Steam game URL into the search box to check prices for all regions in the same way as the extension does.
2. It also provides a snapshot as to the most recent and popular searches.

![](/assets/2011/steam-03.jpg) 
![](/assets/2011/steam-04.jpg)

If the extension builds up interest/momentum I will probably recreate a better version of the site with more features.

You can see the website [here](https://www.steamregionalprices.com/).

## Data
Whenever a search is performed, either via the website OR the extension, I save the following **and only** the following information:

- The current time
- Title
- Steam ID
- Image URL
- AU Price
- US Price
- UK Price
- How many searches in last 12 hours
- How many searches all time

This might update if I add more features, so please check the [about page](https://www.steamregionalprices.com/about.php) to ensure the information is up to date.

## Updates
The extension is currently at it first release (Version: 1.0.1) and will probably have an update bug/fix soon, although the beauty of the way I have developed it is that most the updates can be conducted server side on my end so you will rarely have to download the changes.

I do have some ideas and enhancements in mind but it honestly all depends if the demand is there for it. So if you have any thoughts/suggestions please feel free to speak either using the comments below or at the Steam ARPC website.