module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          './css/style.css': './sass/style.scss',
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
};
