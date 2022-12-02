const gulp = require("gulp");
const ts = require("gulp-typescript");
const webpack = require("webpack-stream");
const named = require("vinyl-named");
const browserSync = require("browser-sync").create();

const nodeProject = ts.createProject("src/tsconfig.node.json");

const webpackConfig = require("./src/webpack.config.js");

const esBuilds = {
  app: () =>
    gulp
      .src(["src/process/app/app.ts"])
      .pipe(named())
      .pipe(webpack(webpackConfig))
      .on("error", console.log)
      .pipe(gulp.dest("dist/process/app/")),

  worker: () =>
    gulp
      .src(["src/process/worker/worker.ts"])
      .pipe(named())
      .pipe(webpack(webpackConfig))
      .on("error", console.log)
      .pipe(gulp.dest("dist/process/worker/")),

  // prettier-ignore
  html: () =>
    gulp
      .src(["src/process/**/*.html"])
      .pipe(gulp.dest("dist/process/")),
};

const nodeBuilds = {
  all: () =>
    gulp
      .src(["src/main.ts", "src/ps.ts", "src/**/*.preload.ts"])
      .pipe(nodeProject())
      .pipe(gulp.dest("dist/")),
};

gulp.task(
  "build",
  gulp.parallel([esBuilds.app, esBuilds.worker, esBuilds.html, nodeBuilds.all])
);

gulp.task("browser-sync", (done) => {
  browserSync.init({
    server: {},
    files: "dist",
    localOnly: true,
    open: false,
  });

  done();
});

gulp.task("watch", () => {
  // prettier-ignore
  gulp
    .watch(["src/**/*.scss"])
    .on("change", esBuilds.app);

  gulp
    .watch(["src/process/app/**/*.ts", "!src/process/**/*.preload.ts"])
    .on("change", esBuilds.app);

  gulp
    .watch(["src/process/worker/**/*.ts", "!src/process/**/*.preload.ts"])
    .on("change", esBuilds.worker);
  // prettier-ignore
  gulp
    .watch(["src/process/**/*.html"])
    .on("change", esBuilds.html);

  gulp.watch(["src/process/**/*.preload.ts"]).on("change", nodeBuilds.all);
});
