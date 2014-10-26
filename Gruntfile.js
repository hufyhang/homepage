module.exports = function (grunt) {
  'use strict';
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      target: {
        command: 'concatem'
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },

        files: [{
          expand: true,
          cwd: '_dist/',
          src: ['**/*.html'],
          dest: '_dist/'
        }]
      }
    },

    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '_dist/',
          src: ['css/*.css'],
          dest: '_dist/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['shell', 'htmlmin:dist', 'cssmin:dist']);

};
