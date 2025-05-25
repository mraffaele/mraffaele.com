---
title: "Migrating Google Workspace to a personal account"
date: "27 Jan 2022"
topics: "Misc"
summary: "Migrating my entire Google Workspace to a personal account — worth it, but a surprisingly tangled mess of data, domains, and dead ends"
---

**Unfortunately it seems a handful of images for this post this have been corrupted. Apologies for the wall of text.**

I&apos;ve been an avid user of Google Workspace (formerly Google Apps and G Suite) for approximately 10 years. It&apos;s a quality service I&apos;m ultimately a fan of, however in recent years I&apos;ve noticed features available to Google users that aren&apos;t quite making it across to Workspace.

The aforementioned features have usually been convenience-based and not deal-breakers. As of late though, I&apos;ve been looking at Family sharing and in summary; Google Workspace is utterly useless for families.

To be clear, I understand Google Work is a targeted to businesses and work rather than family life. However for my setup and many others, Google Workspace accounts serve as the primary accounts for both.

I decided it was time to finally pull the trigger and migrate to a regular Google account.

## What this article is not

This article is not a step-by-step on how to leave Google&apos; services, though there is definitely some of that. It is not about leaving Google&apos;s ecosystem, I&apos;m still there.

Rather it will hopefully serve as view as to the effort required should someone consider moving accounts and perhaps encourage some additional considerations before putting all your eggs in one basket.

## Taking Stock

**Don&apos;t underestimate how deep you are in Google&apos;s ecosystem**
I knew it was going to require significant effort; but can&apos;t believe how much more there was than I first thought. Migrating Gmail, Google Calendar, Google Drive and Google Photos were my initial **non-negotiables**.

Once I took stock of the services I used daily I realised that list was far from my actual needs. Quickly I discovered more and more services I use and took for granted.

Google Keep, Google Maps and Google Pay should do it. Oh wait, Google Analytics, Google Webmaster Tools, Google Home. It quickly surpassed 15 different Google related services I would need to migrate or begin anew.

Not to mention the amount of external services that were tied to my email address.

## Time to get to work

I&apos;ve written an overview of my migration process for each service. I didn&apos;t take much in the way of notes as it happened, but at the time of writing it is still fresh.

### Gmail

Perhaps my most important migration was Gmail. It has 10+ years of emails and the majority of which were important to me to keep. Emails covering tax records, freelance work, investments, travel plans, my car, my house, my family etc.

First I needed to forward any future emails from my old to my new email. Easy. Open your Gmail settings and go to the [Forwarding and POP/IMAP](https://mail.google.com/mail/u/0/#settings/fwdandpop) tab and follow instructions.

![](/assets/2022/gmail.png)

#### Importing my emails

There are various ways to migrate emails and fortunately Google provides an import tool within Gmail:

You can find this feature in Gmail settings under the [Accounts and imports](https://mail.google.com/mail/u/0/#settings/accounts) tab. Simply follow the instructions and you should be able to easily import the emails from one account to the other.

![](/assets/2022/gmail-2.png)

One glaring issue that was a deal breaker for me is that it cannot copy folders or labels. I meticulously organise my emails to hit Inbox Zero and do not want to reorganise 10 years of emails.

#### Another approach

I went the simplest approach possible (in theory); drag and drop using a mail client.

1. Open Mac Mail
2. Create 2 IMAP accounts; one for my old email address, one for my new.
3. Create a folder under the new account. E.g. Work to match the old.
4. Select all the Work emails in the old account and copy them into the Work folder on the new account. Note: You can physically drag them from one to the other, but it moves rather than copies.
5. Rinse and repeat as necessary.

As trivial as that approach sounds, it didn&apos;t quite immediately work as expected and it was slow. Very slow.

Once I&apos;d copied a bunch of emails I checked Gmail to ensure it worked. Nothing, nada. I could see the emails in my client and it was apparently syncing successfully, but the label in Gmail had nothing.

By dumb luck I clicked on **All** Mail in Gmail and sure enough there they were, albeit uncategorised. Mac Mail was uploading but not tagging them. While playing around I then moved them to a new directory using the client, this time it seemed to tag them correctly.

So the process had to be _slightly_ tweaked.

1. Create a folder called **\_Work** and copy your required emails there.
   Create a folder called **Work** and drag your emails from **\_Work** to **Work**. Voila.

Not a massive hurdle but it was a pain to understand what exactly was going wrong. I am curious to see if the issue is isolated to me though.

#### A Handy Little Tip

You can set up a rule so that any emails forwarded from your old account can be tagged. This can help you identify which people/accounts need to be given your new email.

![](/assets/2022/gmail-3.png)

### Google Drive

Once again we have multiple approaches, a pattern I&apos;ve seen around is to create a directory on Drive and drag all your files into it, then simply share with the new account. On the new account you can make a copy of the files which will belong to you. Easy.

#### The catch. There&apos;s always a catch.

Unfortunately you cannot copy folders, only files. Once again my obsession with organisation has made this a pain. My approach was still simple fortunately though it came at the cost of maintaining any sharing permissions which I was willing to sacrifice.

#### My approach.

1. Install the [Google Drive](https://www.google.com/intl/en_au/drive/download/) app on your computer
2. Log in to both of your accounts.
3. On your filesystem copy the files from one account&apos;s directory into the other.

### Google Calendar

Fortunately an easy one, Google Calendar has an import/export tool which can be found in your calendar settings and it actually works well.

![](/assets/2022/calendar.png)

### Google Contacts

Another easy task, I was able to export (as a Google CSV) and then import with all my tagging applied using the built in Export tool which can be found in the sidebar of Google Contacts.

![](/assets/2022/contacts.png)

I did, however, have to set my starred contacts again.

### Google Keep

This was a pain. As Workspace prohibits transferring of ownership beyond the organisation it was not as simple as planned.

The obvious approach is to add your new account as a collaborator and you&apos;re left with two paths from here; a) stick with the original account owning it or b) Make a copy, which creates a new note with the same contents, less any sharing settings.

![](/assets/2022/keep.png)

#### Brute force

In my case the process of adding my account as a contributor, then copying and archiving the shared version was too much effort, instead I ended up copying one note at a time manually which was quicker for me.

The upside here is I used the opportunity to clean out some notes I no longer needed and the overall effort wasn&apos;t too bad.

### Google Photos

Photos were a concern, I expected the worst case of having to download and re-upload the entire library and accepted it wouldn&apos;t be the end of the world. However, I was pleasantly surprised as to how easy it was.

I simply added my new account as a partner and then on the new account saved them all to my storage. Job done. Amazing.

Navigate to [https://photos.google.com/settings](https://photos.google.com/settings) (old account)
Click on the option Partner Sharing and follow instructions

![](/assets/2022/photos.png)
![](/assets/2022/photos-2.png)

Navigate to [https://photos.google.com/sharing](https://photos.google.com/sharing) (new account)
You should see your partner account photos. Select the contextual menu (3 dots) and click **settings**.
Click "**Save to your library**".

### Google Music (Now YouTube Music)

I **knew** this was going to be manual, no two ways about it. Download my library and re-upload to my new account.

I remembered in Google Music you had the ability to download your entire library at any time and for the life of me I couldn&apos;t find this option in YouTube Music, so I assume its gone.

However you can use [Google Takeout](https://takeout.google.com/) to download your music. Unfortunately with this approach none of your music files are organised, its literally a dump of the files into 2GB zip files, which for me meant downloading 46 .zip files.

![](/assets/2022/music.png)

### Google Domains

Domains transfer was as expected for me. The old account simply had to add the new account as a user with full permissions; which can be done here: [https://domains.google.com/registrar/yourdomain.com/settings](https://domains.google.com/registrar/yourdomain.com/settings).

![](/assets/2022/domains.png)

### Google Pay

Unsurprisingly not much could be done here. Credit cards needed to be uploaded manually to the new account and there was no ability to transfer subscriptions. Rewards cards etc too also just needed to be uploaded again.

Minor frustration is that I was unable to change my PTV (public transport) account so I have to forgo any remaining funds here. I assume, without knowing, that PTV is at fault here rather than Google, as other services were fine to set up again.

### Google Adsense

In the past I remember AdSense was a pain if your account was closed or lost, so I wanted to make sure this was sorted.

Fortunately it was not too big deal and I was able to add the new account under the **Access and Authorization** screen, when it eventually worked. For days I kept running into this screen when hitting that page and I feared the worst, suddenly it worked and I was able to add my account. It has not worked since though.

![](/assets/2022/ad-sense.png)

### Google Webmaster Tools (Now Google Search Console)

This migration task, while a manual process, worked as smooth as silk. The key to the success here (I assume) is doing the Google Domains migration first.

I navigated to the Search Console website and when I entered a property name. It quickly verified me as an owner that was the end of it. Rinse and repeat for each property.

### Google Analytics

Analytics was easy to move. Add the new account as a use will full permissions and the job is done. Apply this to every relevant property.

![](/assets/2022/analytics.png)

### Google Authenticator

Migrating my 2FA keys was unfortunately another frustrating experience. It seemed like it was going to be easy as there is an export function, however the export basically creates a QR code which you need to scan on a new phone immediately.

As I was going to format and use the same device this was basically useless to me, taking a screenshot (to use later) was disabled and I was unsure if it would work.

Ultimately I had to go through one by one and remove 2FA from each of the accounts and add them again when my phone was ready to go. Manual, frustrating and not easily doable for all services.

### Google Home

Google Workspace doesn&apos;t allow you to invite anyone to be part of your home and its frustrating. Due to this I am unable to add my new account to existing devices or transfer ownership.

It is another example where it is just easier to set up each of my devices all over again. Thankfully, I don&apos;t have an expansive smart home; a couple of speakers, tv, air conditioner and plugs.

### Google Maps

I&apos;m far from a power user of Google Maps, so there wasn&apos;t all that much necessary to move. I chose to manually add some locations such as home and work, all the rest I usually have attributed to contacts and I don&apos;t use pinned locations.

As expected, history and reviews cannot be copied to the new account.

### Google Chrome

Chrome was actually a nice and easy migration for me. I was able to easily copy my bookmarks, history and extensions and I don&apos;t save passwords or addresses in Chrome which made it easier still. My migration was performed on a Windows machine, but I expect it would be similar on a Mac and I simply followed the instructions listed here.

### YouTube

Unsurprisingly purchases were a no-go. I manually just subscribed to all my channels all over again and its kind of nice starting a new and seeing what recommendations YouTube provides.

### Google Play

The approach here is to start again from scratch, and it makes total sense. It is a shame to lose app purchases but there isn&apos;t a lot that I actually use regularly so I&apos;m honestly not at all fussed.

### External Services

Now that everything “Google” was completed it was time to commence the drawn out process of changing my email address for a plethora of accounts that exist. I&apos;m not losing access to my existing email so there is no urgency to this fortunately.

The little technique as mentioned above (to tag emails from the old account) will help me update those accounts over time without needing to spend an inordinate amount of time in one sitting to bulk update.

There were a range of accounts I tried to change immediately and was shocked to find that email address changes were not possible, or they required me to contact support to change. I&apos;ve found it frustrating as the number of these is climbing. I actually had spend time on live chat to update it for my bank, however could change my home address and phone number rather easily. I find it bizarre that it&apos;s treated any differently than any other contact method.
