const {shell, app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow();
    mainWindow.loadURL('file://' + __dirname + '/main.html');
    //mainWindow.openDevTools();
});
