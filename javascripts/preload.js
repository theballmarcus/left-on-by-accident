const {remote, desktopCapturer, ipcRenderer} = require('electron');
const suspendPc = require('suspend-pc');
var sleep = require("suspend-pc");

// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
  document.body.style.backgroundImage = "url('../assets/screenshot.png')"; 
})

counter = 0

window.onkeydown = function(e) {
  if(e.keyCode == 9) {
    document.body.style.backgroundImage = "url('../assets/bsod.png')"; 
    setTimeout(function () {
      document.body.style.backgroundImage = "url('../assets/black.png')"; 
      sleep()
      ipcRenderer.send('asynchronous-message', 'quit')
    }, 5000);
  }
  counter++
  if(counter > 7) {
      document.body.style.backgroundImage = "url('../assets/bsod.png')"; 
      setTimeout(function () {
        document.body.style.backgroundImage = "url('../assets/black.png')"; 
        sleep()
        ipcRenderer.send('asynchronous-message', 'quit')
    }, 5000);
  }
}
window.onmousedown = function() { 
  counter++
  counter++
  counter++
  if(counter > 7) {
    document.body.style.backgroundImage = "url('../assets/bsod.png')"; 
    setTimeout(function () {
      document.body.style.backgroundImage = "url('../assets/black.png')"; 
      sleep()
      ipcRenderer.send('asynchronous-message', 'quit')
  }, 5000);
}
}