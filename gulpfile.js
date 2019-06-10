let gulp = require("gulp");
let tslint = require("tslint");
let gulpTslint = require("gulp-tslint");

function helloTask(cb) {
    console.log("Hello Gulp!");
    cb();
}

function promiseTask() {
    return new Promise((resolve) => {
        console.log("Promise task");
        resolve();
    })
}

function lintTask(cb) {
    let program = tslint.Linter.createProgram("./tsconfig.json");
    return gulp.src([
        "src/**/**.ts",
        "test/**/**.test.ts"
    ])
    .pipe(gulpTslint({
        formatter: "stylish",
        program
    }))
    .pipe(gulpTslint.report());
}

exports.hello = helloTask;
exports.lint = lintTask;
exports.promise = promiseTask;
exports.default = gulp.parallel(helloTask, lintTask);