var gulp =  require("gulp"),
    react =  require("gulp-react"),
    sass =  require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    babel = require('gulp-babel');

// js
gulp.task("js",function(){
    gulp.src("components/scripts/app.js")
        .pipe(react())
        .on("error",console.log.bind(console))
        .pipe(gulp.dest("app/js/"));
});



// css

gulp.task("css",function() {
   gulp.src("components/sass/style.scss")
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
			cascade: false
        }))
        .on("error",console.log.bind(console))
        .pipe(gulp.dest("app/css/")); 
});

gulp.task("watch",function(){
      gulp.watch("components/scripts/app.js",["js"]);
      gulp.watch("components/sass/*.scss",["css"]);
});

gulp.task("default",["js","css","watch"]);