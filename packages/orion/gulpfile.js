const del = require('del')
const gulp = require('gulp')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')

const clean = () => {
  return del(['dist'])
}

const buildJS = () => {
  return gulp
    .src([
      'src/**/*.js',
      'src/**/*.ts',
      'src/**/*.tsx',
      '!src/**/*.stories.js',
      '!src/**/*.stories.tsx'
    ])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
}

const buildCSS = () => {
  return gulp
    .src('orion.css')
    .pipe(plumber())
    .pipe(
      postcss([
        require('postcss-import'),
        require('tailwindcss')(
          '../../node_modules/@inloco/atomic-bomb/tailwind.config.js'
        ),
        require('autoprefixer'),
        cssnano()
      ])
    )
    .pipe(gulp.dest('dist'))
}

const copyAssets = () => {
  return gulp.src('src/assets/**').pipe(gulp.dest('dist/assets'))
}

exports.default = gulp.series(
  clean,
  gulp.parallel(buildJS, buildCSS, copyAssets)
)
exports.watch = () => {
  gulp.watch('./src/**/*.css', buildCSS)
  gulp.watch('./src/assets/**', copyAssets)
}
