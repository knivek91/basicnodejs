var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	nodemon = require('gulp-nodemon');

function compile() {
	gulp.src('.public/js/*.js')
	.pipe(browserify( { transform: 'babelify' } ) );
};

gulp.task('nodemon-app', function() {
	nodemon({ script: 'server.js' , ignore: [ 'public/js/bundle.js' ] })
	.on('restart', function() { compile(); });
});

gulp.task('compile-app', function() { compile(); });

gulp.task('watch', function() { gulp.watch('public/js/*.js'), ['compile-app'] });

gulp.task('default', ['nodemon-app']);