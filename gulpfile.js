/**
 * Created by zma on 2016-04-29.
 */
var gulp= require('gulp'),
nodemon= require('gulp-nodemon'),
gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');


gulp.task('default', function(){

    nodemon({

        script: 'app.js',
        ext: 'js',
        env: {
            PORT:8000
        },
        ignore: ['./node_module/**']


    })

        .on('restart', function(){

            console.log('Restarting');
        })

});
gulp.task('test', function(){
   env({vars: {ENV:'Test'}});
    gulp.src('tests/*.js', {read: false})
        .pipe(gulpMocha({reporter: 'nyan'}))
});