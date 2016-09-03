module.exports = function(grunt, options) {
  return {
    options: {
      configFile: 'sass-lint.yml',
    },
    target: "<%= paths.main.scss %>/**/*.scss",
  };
};
