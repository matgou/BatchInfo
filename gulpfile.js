var gulp = require('gulp');
var serve = require('gulp-serve');
var less = require('gulp-less');
var path = require('path');
var bower = require('gulp-bower');
var concat = require('gulp-concat');

// ------------------------------------------------------------------
//   Bower init-requirement
// ------------------------------------------------------------------
gulp.task('bower', function() {
  return bower();
});

// ------------------------------------------------------------------
//   Less compile css
// ------------------------------------------------------------------
gulp.task('less', function () {
  return gulp.src('./less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css/'));
});

// ------------------------------------------------------------------
//   Concat all js
// ------------------------------------------------------------------
gulp.task('scripts', function() {
  return gulp.src([	'./bower_components/jquery/dist/jquery.min.js',
					'./bower_components/bootstrap/dist/js/bootstrap.min.js',
					'./bower_components/bootstrap/dist/js/bootstrap.min.js',
					'./bower_components/angular/angular.min.js',
					'./bower_components/angular-route/angular-route.min.js',
					'./js/00_config/*.js',
          './js/99_Controllers/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/js/'));
});

// ------------------------------------------------------------------
//   Serve
// ------------------------------------------------------------------
gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware
  }
}));

// ------------------------------------------------------------------
//   watch
// ------------------------------------------------------------------
gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
	gulp.watch('./js/**/*.js', ['scripts']);

})

gulp.task('default', ['less', 'scripts', 'serve', 'watch']);
