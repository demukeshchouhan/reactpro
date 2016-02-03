var gulp =  require("gulp"),
    react =  require("gulp-react"),
    babel = require('gulp-babel');


gulp.task("js",function(){
    gulp.src("components/scripts/app.js")
        .pipe(react())
        .on("error",console.log.bind(console))
        .pipe(gulp.dest("app/js/"));
});