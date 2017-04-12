var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var watch = require('gulp-watch');
//minify js
var uglify = require('gulp-uglify');
var pump = require('pump');
// minify css
var cleanCSS = require('gulp-clean-css');

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

//minify js into dist folder
gulp.task('compressJs', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

//minify css into dist folder
gulp.task('compressCss', function () {
  return gulp.src('css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'watch', 'compressJs', 'compressCss']);
