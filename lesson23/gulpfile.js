var gulp = require('gulp');
var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: '',
        port: 8888,
        fallback: 'index.html'
    });
});


gulp.task('default', ['connect']);
