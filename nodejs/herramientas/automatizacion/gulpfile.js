const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
	browserSync.init({
		server: './www',
		port: 8000
	});

	gulp.watch('www/*.html').on('change', browserSync.reload);
});