const { app, BrowserWindow } = require('electron');

require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow () {
    // Criando uma janela
    const win = new BrowserWindow({ 
        width: 800,
        height:600
    });
    // Abrindo html no app
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})