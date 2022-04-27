// 🐕👽🐕👽🐕👽🐕👽🐕👽🐕👽🐕
// 1. Déclaration des variables
// 🐕👽🐕👽🐕👽🐕👽🐕👽🐕👽🐕
let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let rename = require("gulp-rename");
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;
var browserSync = require('browser-sync').create();





// 🏄🛰️🏄🛰️🏄
// 2. Mes tâches
// 🏄🛰️🏄🛰️🏄

// remplace la moulinette de SASS qui transforme .scss -> .css
gulp.task('sassification', function() {
    return gulp.src("dev/css/*.scss")
    // create source maps
    .pipe(sourcemaps.init())
    // prefix : -webkit- etc
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    // rename the file made
    .pipe(rename(function (path) {
        path.basename += ".min";
    }))
    // create source maps
    .pipe(sourcemaps.write('./maps'))
    

    
    
    // destination of the file
    .pipe(gulp.dest('prod/css'));
});

// Copy Html to prod folder
gulp.task('htmlification', function() {
    return gulp.src("dev/*.html")
    .pipe(gulp.dest('prod'));
});

// Copy JS to prod folder
gulp.task('jsification', function() {
    // minify
    return pipeline(
        gulp.src('dev/js/*.js'),
        uglify(),
        rename(function (path) {
            path.basename += ".min";
        }),
        gulp.dest('prod/js')
    );

});

// live server browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "prod/"
        }
    });
});

// copy images to prod/img
gulp.task('imgification', function() {
    return gulp.src("dev/img/*")
    .pipe(gulp.dest("prod/img"));
});


// 🐺👨‍🚀🐺👨‍🚀🐺👨‍🚀🐺👨‍🚀🐺👨‍🚀
// 3. Exécution des tâches
// 🐺👨‍🚀🐺👨‍🚀🐺👨‍🚀🐺👨‍🚀🐺👨‍🚀
gulp.task('observation', gulp.parallel('browser-sync', 'sassification', 'htmlification', 'jsification', 'imgification', function(){
    gulp.watch('dev/css/**/*.scss', gulp.series('sassification'));
    gulp.watch('dev/*.html', gulp.series('htmlification'));
    gulp.watch('dev/js/*.js', gulp.series('jsification'));
    gulp.watch('dev/img/*', gulp.series('imgification'));

    gulp.watch('prod/**/*').on('change', browserSync.reload);


}));

gulp.task('default', gulp.series('observation'));
