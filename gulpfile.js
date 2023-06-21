const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));


function buildStyles() {
    return src("porto/**/*.scss").pipe(sass()).pipe(dest("css"));
}


function watchBuild() {
    watch(["porto/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchBuild);