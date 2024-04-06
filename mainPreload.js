const { contextBridge, ipcRenderer } = require("electron");

let bridge = {
    updateMessage: (callback) => {console.log("hashah");return ipcRenderer.on("updateMessage",callback)},
    trigerMain:()=>ipcRenderer.send("onLoad"),
    trigerSelectedFile:(callback)=>ipcRenderer.on("selected-file",callback),
    restartApp:()=>ipcRenderer.send("restart_app"),
    increaseSize:(width)=>ipcRenderer.send("increaseSize",width),
    defaultSize:(width)=>ipcRenderer.send("defaultSize",width),
    fileOpener:()=>ipcRenderer.send("fileOpener"),
    openLink:(url)=>ipcRenderer.send("openLink",url),
    xlsfileOpner:(fileType,selectedPath)=>ipcRenderer.send(fileType,selectedPath),
    trigerError:(callback)=> ipcRenderer.on("errorXls",callback),
    downLoadUpdate:()=>ipcRenderer.send('downLoadUpdate')
  };
  
  contextBridge.exposeInMainWorld("bridge", bridge);