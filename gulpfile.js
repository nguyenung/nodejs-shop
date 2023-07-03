const { src, dest } = require('gulp');

exports.copyViews = function () {
    return src('src/views/**/*')
        .pipe(dest('dist/views'));
}
