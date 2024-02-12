const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function ComprimeJavaScript (){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/script'))
}
function ComprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/imagens'))
}
function CompilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./build/styles'))
}

exports.sass = CompilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(CompilaSass))
}
exports.JavaScript = ComprimeJavaScript;
exports.Comprimg = ComprimeImagens;