const electron = require('electron');
const {app, BrowserWindow} = electron;
app.on('ready', () => {
    var win = new BrowserWindow({width: 1003, height: 673})
    win.loadURL(`file://${__dirname}/frontend/index.html`);
    
})