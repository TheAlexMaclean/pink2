'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./source/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dest/css/'));
});
 
gulp.task('watch', function(){
    gulp.watch('./source/sass/**/*.scss', gulp.series('sass'));
});