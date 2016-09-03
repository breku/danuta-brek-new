module.exports = function(grunt, options) {
  return {
    options: {
      baseURL: "<%= paths.target.webapp %>",
      sourceMaps: true,
      minify: true,
      mangle: true,
      configFile: "<%= paths.target.tsCompiled %>/systemjs-config.js"
    },
    dist: {
      files: [{
        "src": "./<%= paths.target.webapp %>/app.js",
        "dest": "./<%= paths.target.webapp %>/app-bundle.js"
      }]
    }
  };
};
