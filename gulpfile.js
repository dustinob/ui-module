'use strict';
 
var gulp = require('gulp'),
sass = require('gulp-sass'),
pug = require('gulp-pug');

gulp.task('default', ['style', 'views'], function(){
	gulp.watch('./views/**/*.pug', ['views']);
	gulp.watch('./assets/sass/**/*.scss',['style']);
})
 
gulp.task('style', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('views', function buildHTML() {
  return gulp.src('./views/*.pug')
  .pipe(pug({
      pretty: true
  }))
  .pipe(gulp.dest('./dist'));
});