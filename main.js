const { app, BrowserWindow, Menu, shell } = require('electron')
// const { BrowserWindow } = require('electron')


let janelaPrincipal = null;
app.on('ready', () => {
    console.log('O Electron funfou');
    janelaPrincipal = new BrowserWindow({
        width: 1200,
        height: 800,

        webPreferences: {

        }
    })
    // janelaPrincipal.loadURL(`file://${__dirname}/app/index.html`)
    janelaPrincipal.loadFile('app/index.html')
    Menu.setApplicationMenu(Menu.buildFromTemplate(Template))
});

const Template = [
    {
        label: 'Arquivo',
        submenu: [
            {
                label: 'Sair',
                click: () => app.quit(),
                accelerator: 'Alt+F4'
            },


        ]

    },

    {
        label: 'Sobre',
        click: () => janelaSobre()
    },

    {
        label: 'Ajuda',
        submenu: [
            {
                label: 'Documentação',
                click: () => shell.openExternal('https://drive.google.com/file/d/1RA3foohoitv_mNHi3zYOcWuK0fzeBXdF/view?usp=sharing')
            }
        ]
    }
]

const janelaSobre = () => {
    const sobre = new BrowserWindow({
        width: 500,
        height: 300,
        autoHideMenuBar: true
    });
    sobre.loadFile('app/sobre.html')
}