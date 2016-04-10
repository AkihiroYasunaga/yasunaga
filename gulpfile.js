var gulp = require("gulp");
var sass = require("gulp-sass");

var concat = require('gulp-concat');

gulp.task("sass", function() {
    gulp.src("resources/sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"));
     gulp.watch('./resources/sass/*.scss', ['sass']);
});

gulp.task("js", function () {
     return gulp.src(['bower_components/jquery/dist/jquery.min.js','bower_components/bootstrap/dist/js/bootstrap.min.js','resources/js/**/*.js'])
         .pipe( concat("app.js") )
         .pipe( gulp.dest("public/js") );
     console.log('JSを結合しました。');
     gulp.watch('./resources/js/*.js', ['js']);
 });

gulp.task('default', ['sass','js']);
