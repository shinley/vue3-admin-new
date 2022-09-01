const { HelpFilled } = require('@element-plus/icons-vue')
const {app, BrowserWindow} = require('electron')

app.on('ready', ()=>{
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL('http://127.0.0.1:5173/login')
})