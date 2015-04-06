module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watchify: {
      options: {
        debug: true,
        keepalive: true,
        callback: function(b) {
          b.transform('reactify', {extensions: '.jsx'});
          return b;
        }
      },
      dev: {
        src: './src/test2.js',
        dest: './dest/bundle.js'
      }
    },
    watch: {
      files: './src/css.less',
      tasks: ['less']
    },
    less: {
      files: {
        src: './src/css.less',
        dest: './dest/style.css'
      }
    },
    concurrent: {
      tasks: ['watch','watchify:dev']
    }
  });
  grunt.loadNpmTasks('grunt-watchify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concurrent');

  // Default task(s).
  grunt.registerTask('default', ['less', 'concurrent']);

};