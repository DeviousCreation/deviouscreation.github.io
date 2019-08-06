'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('assets/styles/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/styles'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/styles/*.scss', ['sass']);
});