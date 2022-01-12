# left-on-by-accident

# ---

## 🚀What is _left on by accident_?🚀

Left on by accident is an application to prank back those who think they are smart enogh to prank you. 📚

When you leave your pc, just run this electron package which will lock if anyone tries to press the wrong keys or mouse bottons, and it will leave them very disappointed.

### The technical aspect of _left on by accident_:

It's built using node.js and electron. When you launch the app, it will start of by taking a screenshot of your screen to make it look like your computer is opened and available. When unauthorized people - or just your friends try to type on your keyboard it will look like they crashed or destroyed the pc. 



### Before installing

It is very important that you use X11 as display server if you are running ubuntu! Otherwise it will not work - I debugged around for quite a while to figure this one out.

### IT IS NOT COMPLETELY SAFE...

Linux doesn't allow me to block the Super key. This is quite important. People will be able to start a terminal etc., but it is really hard for them to see what they are doing.


# ❓SO HOW CAN I USE IT????? ❓

**USE IT AT OWN RISK!!!!**

It's actually really easy.

First of all:

```
$ git clone https://github.com/theballmarcus/left-on-by-accident.git && cd left-on-by-accident/
```

to download it. Then

```
$ npm i
```

to download the packages. Now you can run it using: 

```
npm run start
```

**Optionally** you can setup a hotkey to activate the script. 

---

*Ubuntu 20.04* - and possible a lot of other versions:

> settings > keyboard and shortcuts > + (in the buttom)

Then give it a name (the name doesn't matter) and in "command" type:

> npm run --prefix /path/to/folder/with/package.json start

## But how do I escape?

When you have the program running, and you want to disable it, use the hotkey *ctrl+alt+a* - which is the *save_hotkey* in [config.json](/config.json) and then *alt+tab*. This will close the program safely without suspending the pc.

You can also change *turn_off_keys_global* to what you would like in [config.json](/config.json).

Contributers:

- [TheBallMarcus](http://github.com/theballmarcus)
