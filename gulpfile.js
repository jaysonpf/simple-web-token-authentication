let gulp = require("gulp");
let mocha = require("gulp-mocha");



/**
 *  Run all tests 
 * @param {string} path
 *   Path to look for tests files
 * @returns {Object}
 */
function execTests(path) {
    return gulp.src(path, { read: true })
        .pipe(mocha({
            ui: "bdd"           
        }));
}

gulp.task("test", [], () => {
    return execTests("./test/**/*.spec.js");
});

