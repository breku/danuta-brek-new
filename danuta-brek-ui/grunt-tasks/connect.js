module.exports = function(grunt, options) {
  return {
    server: {
      options: {
        port: 9100,
        base: "<%= paths.target.webapp %>/",
        middleware: function(connect, options, defaultMiddleware) {
          if (!Array.isArray(options.base)) {
            options.base = [options.base];
          }

          // Setup the proxy
          var middlewares = [require("grunt-connect-proxy/lib/utils").proxyRequest];

          // Serve static files.
          options.base.forEach(function(base) {
            middlewares.push(connect.static(base));
          });

          // Make directory browse-able.
          // var directory = options.directory || options.base[options.base.length - 1];
          // middlewares.push(connect.directory(directory));

          return middlewares;
        }
      }
    }
  };
};
