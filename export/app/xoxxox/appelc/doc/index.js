const { app, BrowserWindow, screen } = require('electron');

function createWindow () {
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  const winWidth = 300;
  const winHeight = 400;
  //console.log(screenWidth); // DBG
  //console.log(screenHeight); // DBG
  const win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: screenWidth - winWidth - 0,
    y: screenHeight - winHeight - 0,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      contextIsolation: true
    }
  });
  win.loadFile('apptlk.htm');
}

app.whenReady().then(createWindow);
