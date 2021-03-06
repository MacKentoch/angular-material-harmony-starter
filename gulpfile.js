/**
 * NOTE :
 * 
 * 1- default task (sass compile and bundles js/css non minified )
 * $ gulp
 * 
 * 2- dist task (same as default except all minified)
 * $ gulp dist
 * 
 * 3- launch server task (default task before launching server)
 * $ gulp connect
 */
var gulp 				= require('gulp');
var jshint 			= require('gulp-jshint');
var concat 			= require('gulp-concat');
var cssmin 			= require('gulp-cssmin');
var sass 				= require('gulp-sass');
var notify			= require('gulp-notify');
var sourcemaps	= require('gulp-sourcemaps');
var connect			= require('gulp-connect');
var exec      	= require('child_process').exec;
var config 			= require('./src/gulp/gulpConfig');

  

/**
 * SASS 2 CSS - no min
 */
gulp.task('app:sass', function(){	 		 
	gulp.src(config.css.sources, { cwd: config.base.root })
		.pipe(sass().on('error', notify.onError(function (error) { return 'Error: ' + error.message;})))
		.pipe(concat(config.css.dest.filename))
		.pipe(gulp.dest(config.css.dest.dir, { cwd: config.base.root }));	 
 });
/**
 * SASS 2 CSS - min
 */
gulp.task('app:sass:min', function(){
	gulp.src(config.css.sources, { cwd: config.base.root })
		.pipe(sass().on('error', notify.onError(function (error) { return 'Error: ' + error.message;})))
		.pipe(concat(config.css.dest.filename))
		.pipe(cssmin())         
		.pipe(gulp.dest(config.css.dest.dir, { cwd: config.base.root }));
});

/**
 * jshint ES6
 */
gulp.task('jshint:ES6', function(){
  return gulp.src(config.js.sources)
    .pipe(jshint({esnext : true}))
    .pipe(jshint.reporter('default'))
});

/**
 * jspm bundle sfx (non minified)
 */
gulp.task('app:bundle:sfx', ['jshint:ES6', 'app:sass'], function (cb) {
  exec([
		'jspm bundle-sfx ', 
		config.jspm.main,
		' ',
		config.jspm.dest
	].join(' '), function (err, stdout, stderr) {
      cb(err);
			console.log(stdout);
  });
});
/**
 * jspm bundle sfx (minified)
 */
gulp.task('app:bundle:sfx:min', ['jshint:ES6', 'app:sass'], function (cb) {
  exec([
		'jspm bundle-sfx ', 
		config.jspm.main,
		' ',
		config.jspm.dest,
		' ',
		'--minify'
	].join(' '), function (err, stdout, stderr) {
      cb(err);
			console.log(stdout);
  });
});


/**
 * server
 */
gulp.task('connect', ['app:bundle:sfx'],  function() {
  connect.server({
    port: 8080
  });
});


/**
 * default task
 */
gulp.task('default', [
	'app:bundle:sfx',
]);



/**
 * dist task
 */
gulp.task('dist', [
	'app:bundle:sfx:min',
]);


