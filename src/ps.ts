import { BrowserWindow } from "electron";
import * as path from "path";

export class AppProcess {
  private _ratio = 270.719 / 554.88;
  private _path = path.join(__dirname, "process", "app");

  createWindow() {
    const win = new BrowserWindow({
      webPreferences: {
        preload: path.join(this._path, "app.preload.js"),
      },
      minWidth: Math.ceil(270.719 * 1.25),
      resizable: false,
    });

    void win.loadFile(path.join(this._path, "index.html"));

    win.setAspectRatio(this._ratio);

    win.removeMenu();

    win.on("close", () => {
      // TODO: send information to worker by invoking app.preload.js
      // TODO(1): save bottom navbar index
      // TODO(2): send stopwatch time/ alarm info/ timer time to worker
    });

    win.webContents.openDevTools({ mode: "detach" });
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
