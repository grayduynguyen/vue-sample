var gulp = require("gulp"),
    concat = require("gulp-concat"),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    uglifycss = require('gulp-uglifycss');

var webroot = "./wwwroot/";
var jsRoot = "./wwwroot/js";
var cssRoot = "./wwwroot/css";
var scssFiles = webroot + 'scss/**/*.scss';

/*=========== SCSS files to CSS ==============*/
gulp.task('scss', function () {
    return gulp.src(webroot + 'scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(cssRoot));
});

/*=========== SCSS files to CSS ==============*/
gulp.task('css-reload', function () {
    return gulp.src(webroot + 'css/main.css')
        .pipe(livereload());
});

/*=========== Minified CSS ==============*/
gulp.task('mincss', ['scss'], function () {
    return gulp.src(webroot + 'css/main.css')
        .pipe(concat('main.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(cssRoot));
});

/*=========== Gulp SCSS Watch ==============*/
gulp.task('scss:watch', ['v3-scss'], function () {
    livereload.listen();
    gulp.watch(scssFiles, ['v3-scss']);
    gulp.watch(webroot + 'css/main.css', ['v3-css-reload']);
});
gulp.task("all", ['mincss']);