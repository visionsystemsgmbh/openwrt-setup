OpenWrt Build System Quick-Start for Baltos
===========================================


Installation
------------

Prior to beginning with a build process make sure you have following packages installed:

git, libssl-dev, libncurses5-dev, unzip, gawk, zlib1g-dev, pkg-config, u-boot-tools, python2.7, subversion, wget, dosfstools, libconfuse-dev

On a Debian-like system you can invoke following command to get all needed packages installed:

    sudo update
    sudo apt install -y git-core build-essential libssl-dev libncurses5-dev unzip gawk zlib1g-dev
    sudo apt install -y pkg-config u-boot-tools python2.7 subversion wget dosfstools libconfuse-dev

1. `git clone https://github.com/visionsystemsgmbh/openwrt-setup.git`
2. `cd openwrt-setup` 

Use the `build_openwrt` tool to start quickly:

1. `./build_openwrt prepare` - gets all packages necessary to use the OpenWrt Build System.

2. `./build_openwrt get` - gets the OpenWrt Build System itself and adjusts it for use with Baltos devices.

3. `./build_openwrt make` - builds the basic OpenWrt for Baltos. This will take some time (~2h).

4. `./build_openwrt sdcard` - creates a SD-Card image that can run on any Baltos system.

5. `./build_openwrt all` - runs all the step above.

6. `./build_openwrt clean` - deletes the whole OpenWrt Build System.

SD-Card Image
-------------

After running `./build_openwrt sdcard` you can find the resulting SD-Card image under
`openwrt/bin/baltos/sdcard.img`

Copy the image to the SD-Card:

`dd if=openwrt/bin/baltos/sdcard.img of=<SDCARD_DEV> bs=4M`

Replace `<SDCARD_DEV>` with the device file for the SD-Card, i.e.: `/dev/sdb`


Access the OpenWrt System
-------------------------
1. Put the SD-Card into the Baltos device.
2. Connect your PC's Ethernet to the LAN port of the Baltos device: PC <----> Baltos LAN
3. Use a browser to open 192.168.1.1 to open the OpenWrt front end or use ssh to access the device's backend: `ssh root@192.168.1.1` .


Write OpenWrt to Flash
----------------------

1. Connect to the Baltos device via ssh: `ssh root@192.168.1.1`
2. run `burn.sh` which will write OpenWrt to the internal flash.
