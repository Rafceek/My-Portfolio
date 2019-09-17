const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//compile scss into css
function style() {
    //1. where is my scss file
    return gulp.src('./src/sass/**/*.scss')
        //2. pass that file through sass compiler
        .pipe(sass())
        //3. where do I save the compiled CSS
        .pipe(gulp.dest('./src/css'))
        //4. stream changes to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/sass/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;