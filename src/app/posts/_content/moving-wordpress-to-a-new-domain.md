---
title: "Moving WordPress To A New Domain"
date: "21 October 2011"
topics: "Development, Wordpress"
archive: "true"
summary: "Step-by-step breakdown of moving a WordPress site cleanly. A mix of search-replace and database sanity checks"
---

## The Problem

Every time I move a WordPress website to a new domain name or url (eg: moving it from a testing site to a live site) I can always count on one thing; my ability to forget the SQL statements to update the urls.

My problem isn’t so much forgetting that I have to do it, but actually forgetting the code itself. Even worse, I haven’t actually documented the code anywhere so I can’t just copy and paste it from somewhere else.

The 3 lines of code really aren’t much to remember, I mean, they are simple and very logical. It’s virtually a find and replace of the old urls to the new urls but for some reason everytime I need it my head just goes blank. Sure I could probably do a find and replace in the SQL dump of the database before the import, but in the past I have faced issues doing it this way for some reason.

**For future reference, here is the code:**

```sql
UPDATE wp_options SET option_value = replace(option_value, 'THEOLDURL', 'THENEWURL') WHERE option_name = 'home' OR option_name = 'siteurl';

UPDATE wp_posts SET guid = replace(guid, 'THEOLDURL','THENEWURL');

UPDATE wp_posts SET post_content = replace(post_content, 'THEOLDURL', 'THENEWURL');
```

## I actually did something about it

It happened again the other day and I’m tired of it, so I decided to do something about it. No, I didn’t memorise the code because well, lets face it, I really should know it already but for some reason it won’t stick. Instead I created a little website which will do it for me. Besides, I figured I can’t be the only person who makes this mistake, so why not help other people out too?

Welcome, [http://www.moving-wordpress.net](http://www.moving-wordpress.net). Here you simply enter your current WordPress site url (eg: http://localhost) followed by the destination url (eg: http://mraffaele.com) and click the generate button. It then spits out the SQL code you need to run. Easy as pie.

![Moving Wordpress screenshot](/assets/2011/moving-wordpress.jpg)

## But wait, there more!
Also, I figured I might as well provide some general instructions on how to manually move, backup or restore a WordPress website, so I added that too. It is all text right now, but I’ll hopefully clean it up, throw in some images and just make it nicer to read overall.

So that’s it, the next time you are migrating a WordPress website, head on over to [Moving Wordpress](http://www.moving-wordpress.net) and shave that whole 5-10 minutes off your workload. I know I’ll be using it.