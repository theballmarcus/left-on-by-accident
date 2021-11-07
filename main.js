const { app, BrowserWindow, globalShortcut, ipcMain} = require('electron')
const path = require('path')
const screenshot = require('screenshot-desktop')
const electronLocalshortcut = require('electron-localshortcut');
let config = require('./config.json')
var sleep = require("suspend-pc");


closeable = false
counter = 0

screenshot({filename: 'assets/screenshot.png' }).then((imgPath) => {
    function createWindow () {
        const mainWindow = new BrowserWindow({
          width: 800,
          height: 600,
          fullscreen:true,
          webPreferences: {
            preload: path.join(__dirname, '/javascripts/preload.js'),
            devTools: false
          }
        })
        
        mainWindow.setAlwaysOnTop(true, 'screen');

        mainWindow.loadFile('index.html')
        mainWindow.on('close', (e) => {
          if (process.platform !== 'darwin' && closeable == true) {
              console.log(closeable)

              app.quit()
          } else {
              console.log('Prevented closing')
              counter++
              if(counter > 1) {
                goSleep()
              } else {
                
                e.preventDefault()
              }
          }
        })
        globalShortcut.register(config.save_hotkey, () => {
          closeable = true
          console.log("App is now closeable")
        })
        for(i of config.turn_off_keys_global) {
          globalShortcut.register(i, (e) => {
            app.quit()
            }) 
        }
/*        for(i of turnoff_keys_local) {
            electronLocalshortcut.register(mainWindow, i, () => {
                appasdasd.quit()
            });
        }*/
      }
      app.whenReady().then(() => {
        createWindow()
      
        app.on('activate', function () {
          if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
      })
      
      app.on('window-all-closed', function (e) {
        if (process.platform !== 'darwin' && closeable == true) app.quit()
//        else e.preventDefault
      })  
});


ipcMain.on("asynchronous-message", (event, arg) => {
  console.log("asynchronous-message received ");
  // event.sender.send('asynchronous-reply', 'pong')
  if(arg == "quit") {
    goSleep()
  }
});
function goSleep() {
  sleep()
  closeable = true
  app.quit()
}