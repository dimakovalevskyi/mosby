'use strict';

const { src, dest, series, parallel, watch, task } = require('gulp');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

function scripts() {
    return src('src/js/app.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(browserify())
        .pipe(sourcemaps.write())
        .pipe(dest('dist/'));
}

function styles() {
    return src('src/scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(dest('dist/'));
}

function minifyScripts() {
    return src('dist/app.js')
        .pipe(uglify())
        .pipe(dest('dist/'));
}

function minifyStyles() {
    return src('dist/styles.css')
        .pipe(cleanCss())
        .pipe(dest('dist/'));
}

function serve() {
    function reload(done) {
        browserSync.reload();
        done();
    }
    browserSync.init({
        server: './dist'
    });
    watch(['src/js/*.js'], series(scripts, reload));
    watch(['src/scss/*.scss'], series(styles, reload));
    watch(['dist/index.html'], series(reload));
}

exports.styles = styles;
exports.scripts = scripts;
exports.serve = serve;

exports.default = parallel(styles, scripts);
exports.build = parallel(
    series(styles, minifyStyles), 
    series(scripts, minifyScripts)
);
