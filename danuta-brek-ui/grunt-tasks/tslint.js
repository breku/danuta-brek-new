module.exports = function(grunt, options) {
  return {
    options: {
      configuration: grunt.file.readJSON("tslint.json")
    },
    files: {
    	// TODO: odkomentować jak juz wszyscy nauczą się korzystać z atoma ;)
    	//src: ["<%= paths.main.ts %>/**/*.ts"]
    }
  };
};
