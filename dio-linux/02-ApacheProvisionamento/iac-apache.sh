#!/bin/bash

bash ./iac-linux.sh;
apt-get update;
apt-get upgrade -y
apt-get install apache2 -y;
apt-get install unzip;
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip -O /tmp/site.zip;
unzip /tmp/site.zip -d /var/www/html;
rm /tmp/site.zip;
chown -R www-data:www-data /var/www/html;
systemctl restart apache2;