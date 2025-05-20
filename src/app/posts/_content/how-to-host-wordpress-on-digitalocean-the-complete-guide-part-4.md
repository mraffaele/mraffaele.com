---
title: "How to Host WordPress on Digitalocean - The Complete Guide (Part 4/4)"
date: "5 February 2017"
topics: "Hosting"
archive: "true"
summary: "Finalized the setup with domain configuration and email functionality; tying up the loose ends"
---

## Setting up your domain name and sending emails from the server

This is the **final part** in the tutorial series “How to Host WordPress on DigitalOcean – The Complete Guide”. The other parts are as below:

1. [Creating a new Droplet and setting up users](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-1)
2. [Creating and serving a static website](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-2)
3. [Setting up MySQL and creating a WordPress website](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-3)
4. **Setting up your domain name and sending emails from the server**

### Set up your domain name on DigitalOcean
#### Prepare DigitalOcean to accept the domain
Now we’re off the command line for a little bit, let’s head back on over to your [Droplets page at DigitalOcean](https://cloud.digitalocean.com/droplets).

You should see your Droplet listed, on the right hand side of it click **More** and then **Add a domain**.

![](/assets/2017/001-AddDomainToDroplet.png)

Enter your domain name (testwordpress.com) into the textbox and click **Add domain**.

![](/assets/2017/002-EnterDomain.png)

That’s it! If you’re interested in more information, [look no further](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-host-name-with-digitalocean).

#### Update your DNS Records
We then need to change our DNS records (for our domain name) to point to our new Droplet.

There are hundreds of tutorials online for this and its not DigitalOcean specific, so it seems crazy to write another. [This tutorial](https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars) is thorough and tells you everything you need to know.

If you know what to do, just go ahead and set the following nameservers:

```
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com
```

DNS records can take time to propagate, how long it takes depends on your TTL and your provider, but 24 hours is usually more than ample time for the changeover to complete.

**Once this is complete you should delete the record we created in your host file. We no longer need it.**

### Enable the server to send emails
Most websites need the ability to send emails. Some also need to receive so need to host a mailbox – the latter is out of the scope of this tutorial, and you may want to consider this before you do it.

Enabling the server to send emails however is quiet painless with an application called Postfix.

To install and set it up in its most basic and working﻿犀利士
fashion we need to do the following:

First ensure apt-get is up to date:

```
sudo apt-get update
```

Then install mailutils, which will launch the wizard to configure it, run the following command and follow its instructions.

```
sudo apt install mailutils
```

When the question comes up to set your mail type, select Internet site.

Finally we need to do a little bit more to configure Postfix. Run the following command:

```
sudo vim /etc/postfix/main.cf
```

Scroll down until you see a line that says:

```
inet_interfaces = all
```

Change it to say:

```
inet_interfaces = loopback-only
```

Save the file and you should be good to go! You can test if it works with the following command:

```
echo "This is the body of the email" | mail -s "This is the subject line" "YOUREMAIL@HERE.CO﻿樂威壯
M"
```

And that should be it! You server should now be able to send emails. If you’d like to understand what is going on, or read more, [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-postfix-as-a-send-only-smtp-server-on-ubuntu-16-04) is a great start.

 

### That’s a wrap
By this point you should have a Droplet that is successfully running WordPress, can be viewed online and can send emails.

I hope this tutorial proves useful to anybody that was looking to set up a Droplet to run WordPress, or any PHP application for that matter. If you have any questions, notice any errors or feel something needs to be elaborated on please feel free to leave a comment below and I’ll do my best to update the posts.