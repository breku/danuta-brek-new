///ts:ref=systemjs
/// <reference path="../../../typings/systemjs/systemjs.d.ts"/> ///ts:ref:generated

System.config({
  defaultJSExtensions: true,
  map: {
    "angular": "libs/angular.js",
    "angular-ui-router": "libs/angular-ui-router.js",
    "moment": "libs/moment.min.js",
    "angular-translate": "libs/angular-translate.js",
    "angular-post-message": "libs/angular-post-message.js",
    "jquery": "libs/jquery.js",
    "bootstrap": "libs/bootstrap.js",
    "angular-toastr": "libs/angular-toastr.js",
    "angular-animate": "libs/angular-animate.js",
    "angular-toastr.tpls": "libs/angular-toastr.tpls.js",
    "angular-filter": "libs/angular-filter.js",
    "toArrayFilter": "libs/toArrayFilter.js",
    "prettify": "libs/prettify.min.js",
    "angular-bootstrap-tpls": "libs/ui-bootstrap-tpls.js",
    "angular-cookies": "libs/angular-cookies.js"
  },
  meta: {
    // default module export configuration: https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md#shim-dependencies
    "angular": {
      exports: "angular"
    },
    "moment": {
      exports: "moment"
    }
  }
});
