const { app, BrowserWindow, globalShortcut } = require('electron')
let win;
const route = require('./config')
function createWindow () {
   win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true

    }
  })

  win.loadURL(route.url)

}

function toggleDevTools(){
  win.webContents.toggleDevTools()
}
function createShortcuts(){
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
}

app.whenReady().then(createWindow).then(createShortcuts)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})