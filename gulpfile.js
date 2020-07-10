// gulp file

const { series, parallel, src, dest, task, watch } = require("gulp");

/* Start reqiure packages area */

// sass plugin
const sass = require("gulp-sass");

// pug plugin
const pug = require("gulp-pug");

// compress js files
const minify = require("gulp-minify");

// compress css files
const cleanCSS = require("gulp-clean-css");

// minified imgs
const image = require("gulp-imagemin");

// reload browser auto plugin
const browserSync = require("browser-sync");

/* End reqiure packages area */

/* Start directories area */
const myRoot = "./";
const projectSRC = myRoot + "src/";
const layout = myRoot + "app/";
const imgDir = "img";
const sassDir = projectSRC + "sass";
const pugDir = projectSRC + "pug";
const jsDir = "js";
const cssDir = "css";
/* End directories area */

/* Start file path's area */
const imgs = imgDir + "/**/*";
const sassFiles = sassDir + "/*.scss";
const jsFiles = jsDir + "/*.js";
const cssFiles = cssDir + "/*.css";
const pugFiles = pugDir + "/*.pug";
const pugIndex = pugDir + "/index.pug";
/* End file path's area */

/* Start task custom functions & helper functions area */
// showt & prevent error stop the gulp script
function showError(err) {
	console.log(err);
	this.emit("end");
}

function sassTaskFunc() {
	return src(sassFiles)
		.pipe(sass())
		.on("error", showError)
		.pipe(dest(projectSRC + cssDir));
}
function pugTaskFunc() {
	return src(pugIndex)
		.pipe(
			pug({
				pretty: true,
			})
		)
		.on("error", showError)
		.pipe(dest(layout))
		.pipe(browserSync.stream());
}
function jsTaskFunc() {
	return src(projectSRC + jsFiles)
		.pipe(
			minify({
				ext: { min: ".js" },
				noSource: true,
			})
		)
		.on("error", showError)
		.pipe(dest(layout + jsDir))
		.pipe(browserSync.stream());
}
function cssTaskFunc() {
	return src(projectSRC + cssFiles)
		.pipe(cleanCSS({ compatibility: "ie8" }))
		.pipe(dest(layout + cssDir))
		.pipe(browserSync.stream());
}
function imageTaskFunc() {
	return src([projectSRC + imgs, "!" + projectSRC + imgs + ".gif"])
		.pipe(image())
		.pipe(dest(layout + imgDir))
		.pipe(browserSync.stream());
}
function browserSyncFunc() {
	return browserSync.init({
		server: layout,
		ui: false,
		port: 5000,
	});
}
function watchFilesFunc() {
	watch(sassFiles, series(sassTaskFunc, cssTaskFunc));
	watch(pugFiles, pugTaskFunc);
	watch(projectSRC + jsFiles, jsTaskFunc);
	watch(imgs, imageTaskFunc);
}

/* End task custom functions & helper functions area */

/* Start task exec area */

// SASS task
task("sassTask", sassTaskFunc);

// PUG task
task("pugTask", pugTaskFunc);

// JAVASCRIPT task
task("jsTask", jsTaskFunc);

// CSS task
task("cssTask", series(cssTaskFunc, sassTaskFunc));

// image compressing
task("imageTask", imageTaskFunc);

// Static Server + watching files
task("browserSync", browserSyncFunc);

// Watch task
task("watchTask", watchFilesFunc);

// Default task
task(
	"buildTask",
	series(sassTaskFunc, pugTaskFunc, jsTaskFunc, cssTaskFunc, imageTaskFunc)
);

// Default task
task(
	"default",
	parallel(
		sassTaskFunc,
		pugTaskFunc,
		jsTaskFunc,
		cssTaskFunc,
		imageTaskFunc,
		watchFilesFunc,
		browserSyncFunc
	)
);

/* Start task exec area */
