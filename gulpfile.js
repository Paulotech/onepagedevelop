const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

//Tarefa "default" que inicia com comando "gulp"
gulp.task('default', watch);

//Tarefa que chama a função compilaSass
gulp.task('sass', compilaSass);

//Função que compila o sass utilizando o "gulp-sass"
function compilaSass() {
    return gulp.src(['scss/style.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //Converter o sass em css
    .pipe(gulp.dest('css'));
}

//Função que inicia o serve
function serve() {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
};

//Função assiste qualquer  mudança nos diretórios indicados e chama alguma outra função
function watch() {
    serve(); 
    gulp.watch(['*.html','scss/*.scss']).on('change', reload);
    gulp.watch(['scss/*.scss'], compilaSass);
}
