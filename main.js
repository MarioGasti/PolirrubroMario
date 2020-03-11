const { app, BrowserWindow } = require('electron');
require('electron-debug')({ showDevTools: true });

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '#ffffff',
        icon: `file://${ __dirname }/dist/PolirrubroMario/assets/logo.png`
    });

    win.loadURL(`file://${ __dirname }/dist/PolirrubroMario/index.html`);

    win.on('closed', _ => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', _ => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', _ => {
    if (win === null) createWindow();
});