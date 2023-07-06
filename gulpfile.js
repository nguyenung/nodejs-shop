import pkg from 'gulp';
const { src, dest } = pkg;

export function copyViews() {
    return src('src/views/**/*')
        .pipe(dest('dist/views'));
}
