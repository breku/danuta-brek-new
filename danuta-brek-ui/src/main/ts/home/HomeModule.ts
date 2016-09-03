import FrontendDependencyModule from "../dependency/FrontendDependencyModule";


let module = angular.module("homeModule", [FrontendDependencyModule.name]);

module.config(["$stateProvider", ($stateProvider: angular.ui.IStateProvider) => {
  $stateProvider.state("/", {
    url: "/",
    views: {

      "sidebar": {
        templateUrl: "home/home_sidebar.tpl.html",



      },
      "@": {
        templateUrl: "home/home.tpl.html",


      }
    }

  });
}]);



export default module;