module.exports = function(grunt){
  grunt.initConfig({
    less: {
      development: {
        files: {
          'src/less/css/style.css': 'src/less/style.less'
        }
      }
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.min.css': 'src/less/css/style.css'
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
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/bundle-es5.min.js': 'src/js/bundle-es5.js'
        }
      }
    },

    watch: {
      less: {
        files: 'src/less/style.less',
        tasks: 'less'
      },
      browserify: {
        files: 'src/js/main.js',
        tasks: 'browserify'
      }
    },

    connect: {
      server: {
        options: {
          port: 3000
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.task.registerTask('dev', ['connect','less','browserify','watch']);
  grunt.task.registerTask('build', ['cssmin','babel','uglify']);
}
