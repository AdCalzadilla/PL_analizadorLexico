var gulp    = require('gulp')
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var karma   = require('gulp-karma');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var shell = require('gulp-shell');

gulp.task('minify', function () {
  gulp.src('tokens.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'))

gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

gulp.src('./*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task('open', function() {
  return gulp.src('').
           pipe(shell("open https://github.com/alu0100288216/PL_analizadorLexico"));
});

gulp.task('test', function() {
  return gulp.src([])
           .pipe(karma({
             configFile: 'karma.conf.js',
             action: 'run'
           }))
           .on('error',function(err){
             throw err;
           });
});

gulp.task('default', ['server']);

// npm install supervisor -g
gulp.task('server', function () {
  return gulp.src('').pipe(shell([ 'node-supervisor app.js' ]));
});
