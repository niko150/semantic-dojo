/*******************************
            Set-up
*******************************/

var
  gulp            = require('gulp-help')(require('gulp')),
  gulpif          = require('gulp-if'),
  less            = require('gulp-less'),
  chmod           = require('gulp-chmod'),
  requireDotFile  = require('require-dot-file'),
  minifyCSS       = require('gulp-minify-css'),
  config;


  /*******************************
  Config
  *******************************/

  try { 
    config = requireDotFile('config.json');
  }
  catch(error) {
    if(error.code === 'MODULE_NOT_FOUND') {
      console.error('No config.json file found');
    }
  }

  var
  output       = config.paths.output,
  source       = config.paths.source;

  gulp.task('default', function() {

      console.info('Building Assets');

      gulp.src(source.themes + '/**/assets/**/*.*')
        .pipe(gulp.dest(output.themes));

      console.info('Building Semantic-Dojo');

      gulp.src(['less/semantic-dojo.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'));

  });