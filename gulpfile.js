const gulp = require("gulp");


const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");


gulp.task("sass",function(){
	gulp.src("./sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(autoprefixer({
		browsers:["> 5%"],
		cascade:false
	}))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./css"));
});

gulp.task("default",function(){
	gulp.run("sass");
	gulp.watch("./sass/*.scss",function(){
		gulp.run("sass");
	});
});
