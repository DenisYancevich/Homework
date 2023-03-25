import gulp from "gulp";
import gulpUglify from "gulp-uglify";
import sass from "sass";
import gulpSass from "gulp-sass";
import gulpConcat from "gulp-concat";
import babel from "gulp-babel";
import watch from "gulp-watch";
import eslint from "gulp-eslint-new";
import postcss from "gulp-postcss";

const SRC = "./src/";
const SRC_JS = `${SRC}js/**/*.js`;
const SRC_CSS = `${SRC}css/**/*.css`;
const DIST = "./dist/";

const scss = gulpSass(sass);

async function jsComp() {
  gulp
    .src(SRC_JS)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.fix())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(gulpUglify())
    .pipe(gulpConcat("all.js"))
    .pipe(gulp.dest(DIST));
}

async function watchJs() {
  gulp.watch(SRC_JS, jsComp);
}

async function cssComp() {
  gulp.src(SRC_CSS).pipe(postcss()).pipe(scss()).pipe(gulp.dest(DIST));
}

async function watchCss() {
  gulp.watch(SRC_CSS, cssComp);
}

gulp.task();

gulp.task("jsComp", jsComp);
gulp.task("cssComp", cssComp);

gulp.task("watchJs", watchJs);
gulp.task("watchCss", watchCss);

gulp.task("default", gulp.parallel(["jsComp", "cssComp"]));

gulp.task("setWatchers", gulp.parallel(["watchJs", "watchCss"]));
