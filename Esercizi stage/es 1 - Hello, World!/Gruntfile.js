module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    less: {
      development: {
        files: {
          'pages/dist/css/style.css': 'src/less/style.less'
        }
      }
    },

    watch: {
      less: {
        files: ['src/less/style.less'],
        tasks: ['less']
      },
      uglify: {
        files: ['src/js/bundle-es5.js'],
        tasks: ['uglify']
      },
      babel: {
        files: ['src/js/bundle.js'],
        tasks: ['babel']
      },
      browserify: {
        files: ['src/js/main.js'],
        tasks: ['browserify']
      }
    },

    uglify: {
      my_target: {
        files: {
          'pages/dist/js/bundle-es5.min.js': ['src/js/bundle-es5.js']
        }
      }
    },

    browserify: {
      dist: {
        files: {
          'src/js/bundle.js': 'src/js/main.js'
        }
      }
    },

    babel: {
      options: {
        presets: ['env']
      },
      dist: {
        files: {
          'src/js/bundle-es5.js': 'src/js/bundle.js'
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.task.registerTask('build', ['browserify','babel','less','uglify','watch']);
};
