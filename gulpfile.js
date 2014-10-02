// See: http://gulpjs.com/

var gulp = require('gulp');
var argv = require('yargs').argv;
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

var changedFile = null;

// Lint all modules:
// $ gulp lint
// Lint one module:
// $ gulp lint --src=foo
// $ gulp lint --src foo
gulp.task('lint', function () {
    var src = argv.src;
    return gulp
        .src(src || changedFile || ['./static/js/**/*.js', './static/test/**/*.js', './gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs());
});

// Testing all modules:
// $ gulp test
// Testing one module:
// $ gulp test --name=fullscreen
// $ gulp test --name fullscreen
gulp.task('test', function () {
    var src = argv.name;
    if (src) {
        src = [
            './static/test/**/' + argv.name + '-test.html',
        ];
    } else {
        src = [
            './static/test/**/*-test.html',
        ];
    }
    return gulp
        .src(src)
        .pipe(mochaPhantomJS({
            reporter: 'spec',
        }));
});

gulp.task('watch', function () {
    gulp.watch(
        ['./static/js/**/*.js', './static/test/**/*.js'],
        function (e) {
            changedFile = e.path;
            gulp.run('lint');
        }
    );
});

gulp.task('default', ['lint', 'test']);
