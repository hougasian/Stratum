/*global require*/

const { src, dest, parallel, watch } = require('gulp');
const connect = require('gulp-connect');
const sass = require("gulp-sass");

const paths = {
    sassSource: "css/scss/*.scss",
    sassDest: "css"
};

function serve() {
  connect.server({
    root: './',
    port: 8009,
    livereload: true
  });
}

function css() {
  return src(paths.sassSource)
    .pipe(sass())
    .pipe(dest(paths.sassDest));
}

function watchFiles() {
  watch(paths.sassSource, css);
}

exports.runSass = css;
exports.default = parallel(css, serve, watchFiles);
