module.exports = function(grunt, options) {
  return {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        "<%= paths.target.scssCompiled %>/main.css": "<%= paths.main.scss %>/main.scss"
      }
    }
  };
};
