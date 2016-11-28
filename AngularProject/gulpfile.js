/// <binding BeforeBuild='js' ProjectOpened='test' />
// gulpfile.js

var mainBowerFiles = require('main-bower-files');

var gulp = require('gulp');
var gutil = require('gulp-util');
// define plug-ins
var flatten = require('gulp-flatten'),
  gulpFilter = require('gulp-filter'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  mainBowerFiles = require('main-bower-files');

// Define paths variables
var dest_path = 'app';

// grab libraries files from bower_components, minify and push in /public
gulp.task('publish-components', function () {
    var jsFilter = gulpFilter('*.js', { restore: true }),
        cssFilter = gulpFilter('*.css', { restore: true }),
        fontFilter = gulpFilter(['*.eot', '*.woff', '*.woff2', '*.svg', '*.ttf'], { restore: true });
    //gutil.log(mainBowerFiles());
    return gulp.src(mainBowerFiles())

    // grab vendor js files from bower_components, minify and push in /public
    .pipe(jsFilter)
    .pipe(debug())
    .pipe(gulp.dest(dest_path + '/js/'))
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(dest_path + '/js/'))
    .pipe(jsFilter.restore)

    // grab vendor css files from bower_components, minify and push in /public
    .pipe(cssFilter)
    .pipe(gulp.dest(dest_path + '/css'))
    .pipe(minifycss())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(dest_path + '/css'))
    .pipe(cssFilter.restore)

    // grab vendor font files from bower_components and push in /public
    .pipe(fontFilter)
    .pipe(flatten())
    .pipe(gulp.dest(dest_path + '/fonts'));
});


var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var debug = require('gulp-debug');
gulp.task('js', function () {

    gulp.src([
            './app/app/app.js',
            './app/**/*.js',
            '!./app/**/*_test*.js',
            './app/**/**/*.js',
            '!./app/**/**/*_test*.js',
            '!./app/Projects/**/**/*.js',
            '!./app/Projects/**/**/*_test*.js',
            '!./app/bower_components/**/*',
            '!./app/css/*',
            '!./app/js/*',
            '!./app/fonts/*',
            '!./app/app.js'
            // '/src/**/!(foobar)*.js', // all files that end in .js EXCEPT foobar*.js
            // '/src/js/foobar.js'
    ])
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(concat('app/app.js'))
        .pipe(ngAnnotate())
    //    .pipe(uglify())
    //    .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));
});
var Server = require('karma').Server;
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done).start();
});