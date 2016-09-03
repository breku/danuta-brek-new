module.exports = function(grunt, options) {
  return {
    libs: {
      files: [{
        expand: true,
        dest: "<%= paths.target.webappLibs %>",
        flatten: true,
        src: [
          "bower_components/angular/angular.js",
          "bower_components/system.js/dist/system.js",
          "bower_components/system.js/dist/system-polyfills.js",
          "bower_components/angular-ui-router/release/angular-ui-router.js",
          "bower_components/moment/min/moment.min.js",
          "bower_components/jquery/dist/jquery.js",
          "bower_components/bootswatch-dist/js/bootstrap.js",
          "bower_components/angular-translate/angular-translate.js",
          "bower_components/angular-post-message/dist/angular-post-message.js",
          "bower_components/angular-animate/angular-animate.js",
          "bower_components/angular-toastr/dist/angular-toastr.js",
          "bower_components/angular-toastr/dist/angular-toastr.tpls.js",
          "bower_components/angular-filter/dist/angular-filter.js",
          "bower_components/angular-toArrayFilter/toArrayFilter.js",
          "bower_components/google-code-prettify/bin/prettify.min.js",
          "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
          "bower_components/angular-cookies/angular-cookies.js"
        ]
      }, {
        expand: true,
        dest: "<%= paths.target.webappStyles %>",
        flatten: true,
        src: [
          "bower_components/angular-toastr/dist/angular-toastr.css",
          "bower_components/bootswatch-dist/css/bootstrap.css",
          "bower_components/google-code-prettify/bin/prettify.min.css",
          "bower_components/font-awesome/css/font-awesome.css"
        ]
      }, {
        expand: true,
        dest: "<%= paths.target.webappFonts %>",
        flatten: true,
        src: [
          "bower_components/bootswatch-dist/fonts/glyphicons-halflings-regular.eot",
          "bower_components/bootswatch-dist/fonts/glyphicons-halflings-regular.svg",
          "bower_components/bootswatch-dist/fonts/glyphicons-halflings-regular.ttf",
          "bower_components/bootswatch-dist/fonts/glyphicons-halflings-regular.woff",
          "bower_components/bootswatch-dist/fonts/glyphicons-halflings-regular.woff2"
        ]
      }]
    },
    typescriptCompiled: {
      files: [{
        expand: true,
        cwd: "<%= paths.target.tsCompiled %>",
        dest: "<%= paths.target.webapp %>",
        src: [
          "!.baseDir.js",
          "**/*.js",
          "**/*.js.map"
        ]
      }]
    },
    typescriptSources: {
      files: [{
        expand: true,
        cwd: "<%= paths.main.ts %>",
        dest: "<%= paths.target.webapp %>",
        src: [
          "**/*.ts"
        ]
      }]
    },
    templatesHtml: {
      files: [{
        expand: true,
        cwd: "<%= paths.main.templates %>",
        dest: "<%= paths.target.webapp %>",
        src: [
          "**/*.html"
        ]
      }]
    },
    appResources: {
      files: [{
        expand: true,
        cwd: "<%= paths.main.resources %>",
        dest: "<%= paths.target.webapp %>",
        src: [
          "**/*"
        ]
      }]
    },
    stylesheets: {
      files: [{
        expand: true,
        cwd: "<%= paths.target.scssCompiled %>",
        dest: "<%= paths.target.webappStyles %>",
        src: [
          "**/*.css"
        ]
      }]
    }
  };
};
