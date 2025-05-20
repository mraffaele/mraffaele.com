---
title: "Steam Regional Price Checker - New, Improved and Open"
date: "1 August 2018"
topics: "Development, Gaming, JavaScript"
archive: "true"
summary: "Rebuilt my old, clunky Steam price checker into a modern NodeJS API — now open source, faster, and nicer to work with"
---

The Steam Regional Price Checker API is the service powering [Steam Regional Prices](http://steamregionalprices.com/) along with a [Chrome Extension](https://chrome.google.com/webstore/detail/steam-all-region-price-ch/mopoebekmlkmahpfjjgibkbnciooimhn) and an [Opera Extension](https://addons.opera.com/en/extensions/details/steam-regional-prices/). It is a 100% backwards compatible rewrite on NodeJS and is open source and open to the public to use.

## Out with the old
Sometime back in [2011](/posts/steam-regional-prices-chrome-extension), I created a PHP powered private API that enabled the user to pass in a Steam game and see its cost across multiple regions. Next a [website](https://steamregionalprices.com/) was built with an accompanying Chrome extension which automatically performed the lookup on page.

7 or so years later it has garnered some decent usage and the Chrome extension is sitting at over 3000 users. Furthermore, another developer built an Opera plugin using the API to achieve the same result, it currently has had over 9000 users.

I’d been meaning to release the source for a while but the old PHP application was a slow, unpolished memory hog that was outdated and not completely working anymore (currency conversion went down). So I opted to rebuild.

## In with the new
For all the reasons listed above and for a little fun and practice I decided to rewrite the API in NodeJS. It is now served over HTTPS and performs much quicker than it’s predecessor. MongoDB is being used to cache all results and the new response payload is much cleaner than the original.

It is now much easier to add a new regions or currencies, so if anybody has a currency you would like added, either let me know or create a PR (the source is now on [Github](https://github.com/mraffaele/Steam-Regional-Price-Checker)).

Version 2.0.0 is a complete ground up re-write and is 100% backwards compatible. The 1.x.x endpoints are being deprecated and will contain a warning prompting an upgrade.

## Open to the world
Previously it was closed off, if you wanted access you had to request an API key. This is mainly because I was playing around and didn’t want to break anything on anybody. It was also a memory hog that would struggle under too much load. Something I’d hoped to address sooner than 7 years later!

But not more! Right now the API is available for anybody to use and the source is open and up on Github if anybody wants to run their own instance of it. So head on over and give it a look.

[Steam Regional Price Checker on Github](https://github.com/mraffaele/Steam-Regional-Price-Checker)
 