---
title: "How to Host WordPress on Digitalocean - The Complete Guide (Part 2/4)"
date: "3 February 2017"
topics: "Hosting"
archive: "true"
summary: "Configured Nginx to serve a static site; a necessary step before diving into dynamic content"
---

## Creating and serving a static website

This is **part 2** in the tutorial series “How to Host WordPress on DigitalOcean – The Complete Guide”. The other parts are as below:

1. [Creating a new Droplet and setting up users](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-1)
2. **Creating and serving a static website**
3. [Setting up MySQL and creating a WordPress website](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-3)
4. [Setting up your domain name and sending emails from the server](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-4)


### Configuration
Nginx (and Apache) have the ability to host multiple websites on the same server, we need only to define a configuration for each site we wish to serve. In this section we will implement basic configuration for a website.

The Nginx configuration files can be found in **/etc/nginx** and, specifically, the website configuration files are in **/etc/nginx/sites-available**. In your command line navigate to this folder using the following command:

```
cd /etc/nginx/sites-enabled/
```

By default, all the configuration files in this directory will be loaded and parsed, so creating a new configuration file in this directory should just work. As a side note, there is usually an example configuration file we can copy and modify to suit our needs. However, for the purposes of this example, we will create a new one.

We are going to set up a fictional site called **testwordpress.com**.

We will create the new configuration file and modify it with vim by typing:

```
sudo vim testwordpress.com
```

Add the following config to the file and save it, you can read an explanation for what is happening is below the code example:

```
server {
	root /var/www/testwordpress.com/html;
	index index.php index.html index.htm;
	server_name testwordpress.com;

	location / {
		try_files $uri $uri/ /index.php?$args;
	}

	location ~ \.php$ {
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/run/php/php7.0-fpm.sock;
	}
}
```

- `root /var/www/testwordpress.com/html;` => Defines where our website files will sit on the server.
- `index.php index.html index.htm;` => Defines which files will be loaded by default and their order or priority. E.g. Load index.php if it exists, if not, move onto index.html and so forth.
- `server_name testwordpress.com;` => The domain name of the website.
- `location / { … }` => This is not actually needed for our static site, but it is for WordPress if we want to use pretty permalinks. It basically enables .htaccess to rewrite urls.
The remainder defines the location of php on the filesystem and instructs the server to use it to run php files.

We will then need to restart nginx for the changes to take place:

```
sudo /etc/init.d/nginx restart
 ```

### Creating the website files
By default the __/var/www/__ directory exists, and within it there is usually a directory called __html__. This is the default webroot for our server. Earlier, when we previewed our IP in the browser, the html page we saw resides inside this folder. The structure of this directory is completely up to you, the example here is a structure I personally find clear and concise.

We now have our website configuration all set up and its expecting our files to be in __/var/www/testwordpress.com/html__, so lets go ahead and create that directory with the following commands.

```
cd /var/www/
```

```
mkdir testwordpress.com
```

```
mkdir testwordpress.com/html
```

```
cd testwordpress.com/html
```

Inside here we can create our html or php file:

```
vim index.html
```
Add some text and save it.

What we should do now is fix the user & group for our files. As we’re logged in as michael the files and folders belong to this user, but we want them to belong to __www-data__. Lets do this recursively with the following:

```
cd /var/www/
```

```
chown www-data:www-data testwordpress.com -R
```
 
### Previewing your new website
In order to view our site we need to modify DNS records for the domain name, so right now, we can’t actually see it yet.

We will cover [setting up your domain name](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-4) in part 4, but for the purposes of testing locally, we can to add it to our hosts file. A handy tool to do this easily on Windows is called [Hosts File Editor](https://hostsfileeditor.codeplex.com/).

![](/assets/2017/001-HostsFile.png)

Or on a Mac run the command:

```
sudo nano /private/etc/hosts
```

Add the IP for our server and our domain name and save. We should then be able to preview it in browser by domain name. You may need to clear your cache.

[Continue to Step 3](/posts/how-to-host-wordpress-on-digitalocean-the-complete-guide-part-3)