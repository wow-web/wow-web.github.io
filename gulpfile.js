var gulp					= require('gulp');
var sass					= require('gulp-sass');
var plumber				= require('gulp-plumber');
var postcss				= require('gulp-postcss');
var autoprefixer	= require('autoprefixer');
var minify				= require('gulp-csso');
var imagemin			= require('gulp-imagemin');
var webp					= require('gulp-webp');
var rename				= require('gulp-rename');
var concat        = require('gulp-concat');
var server				= require('browser-sync').create();
var run						= require('run-sequence');
var del						= require('del');

gulp.task('style', function () {
	gulp.src('sass/main.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer(['last 15 versions'])
		]))
		.pipe(gulp.dest('_site/css'))
		.pipe(minify())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('css'))
		.pipe(gulp.dest('_site/css'))
		.pipe(server.reload( {stream: true} ))
});

gulp.task('js', function () {
	gulp.src([
		'js/main.js'
	])
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('js'))
	.pipe(gulp.dest('_site/js'))
	.pipe(server.reload( {stream: true} ));
	gulp.src([
		'js/page.js'
	])
	.pipe(concat('page.min.js'))
	.pipe(gulp.dest('js'))
	.pipe(gulp.dest('_site/js'))
	.pipe(server.reload( {stream: true} ));
});

gulp.task('serve', function () {
	server.init({
		server: '_site/'
	});

	gulp.watch('sass/**/*.sass', ['style']);
	gulp.watch('js/**/*.js', ['js']);
	gulp.watch(['*.html', '_site/**/*.html'], server.reload);
});


gulp.task('build', function (done) {
	run(
		'style',
		'js',
		done
	);
});

gulp.task('start', ['build', 'serve'], function() {} );

gulp.task('default', ['start']);