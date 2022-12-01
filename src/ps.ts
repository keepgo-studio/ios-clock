import { BrowserWindow } from "electron";
import * as path from "path";

export class AppProcess {
  private _ratio = 270.719 / 554.88;
  private _path = path.join(__dirname, "process", "app");

  createWindow() {
    const win = new BrowserWindow({
      width: 542,
      webPreferences: {
        preload: path.join(this._path, "app.preload.js"),
      },
      resizable: false
    });

    void win.loadFile(path.join(this._path, "index.html"));

    win.setAspectRatio(this._ratio);

    win.on("close", () => {
      // TODO: send information to worker by invoking app.preload.js
    });
  }
}

export class WorkerProcess {
  private _path = path.join(__dirname, "process", "worker");

  createWindow() {
    const win = new BrowserWindow({
      show: false,
      webPreferences: {
        preload: path.join(this._path, "worker.preload.js"),
      },
    });

    void win.loadFile(path.join(this._path, "index.html"));
  }
}
