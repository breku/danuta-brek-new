module.exports = function(grunt) {
  require("time-grunt")(grunt);
  require("load-grunt-config")(grunt, {
    
	configPath: require("path").join(process.cwd(), "grunt-tasks"),
    
	config: {
      paths: {
        target: {
          root: "target",
          webapp: "target/webapp",
          webappLibs: "target/webapp/libs",
          webappStyles: "target/webapp/styles",
          webappFonts: "target/webapp/fonts",
          tsCompiled: "target/ts-compiled",
          scssCompiled: "target/scss-compiled"
        },
        
        main: {
          root: "src/main",
          templates: "src/main/templates",
          resources: "src/main/resources",
          ts: "src/main/ts",
          scss: "src/main/scss"
        }
      }
    },
    
    jitGrunt: {
      staticMappings: {
        typescript: "grunt-ts",
        configureProxies: "grunt-connect-proxy",
        sasslint: "grunt-sass-lint",
        systemjs: "grunt-systemjs-builder",
        replace: "grunt-text-replace",
        ngtemplates: "grunt-angular-templates",
        sass: "grunt-sass"
      }
    }
  });
}
