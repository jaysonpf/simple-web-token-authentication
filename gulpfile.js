let gulp = require("gulp");
let mocha = require("gulp-mocha");



/**
 *  Run all tests 
 * @param {string} path
 *   Path to look for tests files
 * @returns {Object}
 */


exports.default =   gulp.task("test", () => {
    return gulp.src('./test/**/*.spec.js', { read: true })
        .pipe(mocha({
            ui: "bdd"
        }));
});

