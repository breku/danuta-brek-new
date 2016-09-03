module.exports = function(grunt, options) {
  return {
    options: {
      livereload: {
        host: "0.0.0.0",
        port: 35829
      },
      spawn: false
    },
    typescript: {
      files: ["<%= paths.main.ts %>/**/*.ts"],
      tasks: ["watch-after–typescript"]
    },
    templatesHtml: {
      files: ["<%= paths.main.templates %>/**/*.html"],
      tasks: ["watch-after–templates"]
    },
    appResources: {
      files: ["<%= paths.main.resources %>/**/*"],
      tasks: ["watch-after-resources"]
    },
    stylesheets: {
      files: ["<%= paths.main.scss %>/**/*.scss"],
      tasks: ["watch-after–stylesheets"]
    }
  };
};
