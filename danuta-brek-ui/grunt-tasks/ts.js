module.exports = function(grunt, options) {
  return {
    default: {
      options: {
        fast: "never"
      },
      tsconfig: "<%= paths.main.ts %>/tsconfig.json"
    }
  };
};
