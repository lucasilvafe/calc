const { app, BrowserWindow, Menu} = require('electron')
// const { BrowserWindow } = require('electron')


let janelaPrincipal = null;
app.on('ready', () => {
    console.log('O Electron funfou');
    janelaPrincipal = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences:{
        
        }
    })
    // janelaPrincipal.loadURL(`file://${__dirname}/app/index.html`)
    janelaPrincipal.loadFile('app/index.html')
})