var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    browserify('./src/js/main.js')
      .transform('reactify')
      .bundle()
      .pipe(source('init-main.js'))
      .pipe(gulp.dest('static/js'));
});

gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('static'));
    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('static/assets'));
});

gulp.task('default',['browserify', 'copy'], function() {
    return gulp.src('src/**/*.*', ['browserify', 'copy'])
});