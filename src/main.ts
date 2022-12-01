import { app, BrowserWindow } from "electron";
import { AppProcess, WorkerProcess } from "./ps";

const appPs = new AppProcess();
const workerPs = new WorkerProcess();

void app.whenReady().then(() => {
  appPs.createWindow();
  workerPs.createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      appPs.createWindow();
    }
  });
});


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
