/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp'),
    exec = require('gulp-exec'),
    awsConfig = require('./aws.config.json'),
    server = require('gulp-server-livereload');

gulp.task('server', function () {
    gulp.src('./s3').pipe(server({
        port: 5000,
        open: true,
        defaultFile: 'index.html'
    }));
});

gulp.task('deploy-s3', function () {
    var command = 'aws s3 sync ./s3/ ' + awsConfig.bucket + ' --region ' + awsConfig.region;
    console.log(command);
    gulp.src(['./s3']).pipe(exec(command)).pipe(exec.reporter());
});
