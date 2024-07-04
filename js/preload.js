const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => {
        let canal = ['nota1'];
        if(canal.includes(channel)){
            ipcRenderer.send(channel, data)
        }
    }
})