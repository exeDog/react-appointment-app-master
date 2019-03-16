// var gulp = require('gulp'),
//     browserify = require('gulp-browserify'),
//     webserver = require('gulp-webserver');
//
// var src = './process',
//     app = './builds/app';
//
// gulp.task('js', function() {
//   return gulp.src( src + '/js/app.js' )
//     .pipe(browserify({
//       transform: 'reactify',
//       debug: true
//     }))
//     .pipe(gulp.dest(app + '/js'));
// });
//
// gulp.task('html', function() {
//   gulp.src( app + '/**/*.html');
// });
//
// gulp.task('css', function() {
//   gulp.src( app + '/css/*.css');
// });
//
//
// // gulp.task('webserver', function() {
// //   gulp.src( app + '/')
// //     .pipe(webserver({
// //         port: process.env.PORT || 5000
// //     }));
// // });
//
// gulp.task('default', ['html', 'js', 'css']);
