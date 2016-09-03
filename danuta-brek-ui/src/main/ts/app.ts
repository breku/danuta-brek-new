import FrontedDependencies from "./dependency/FrontendDependencyModule";

import { PL } from "./translations";
import { IConfig }  from "./config";

import LayoutModule from "./layout/LayoutModule";
import MessageModule from "./message/MessageModule";
import HomeModule from "./home/HomeModule";


import AnimationHelper from "./common/AnimationHelper";



declare var config : IConfig;

let module: angular.IModule = angular.module("app", [
  FrontedDependencies.name,
  LayoutModule.name,
  MessageModule.name,
  HomeModule.name
]);

module.config(["$urlRouterProvider", "$compileProvider", "$translateProvider", (
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  $compileProvider: angular.ICompileProvider,
  $translateProvider: angular.translate.ITranslateProvider
) => {

  $urlRouterProvider.otherwise("/");
  $compileProvider.debugInfoEnabled(false);

  $translateProvider.useSanitizeValueStrategy("escape");
  $translateProvider.translations("pl", PL);
  $translateProvider.preferredLanguage("pl");
}
])
.constant("app.config", config)
.filter("trusted", ["$sce", ($sce: any) => {
    return function(url : string) {
        return $sce.trustAsResourceUrl(url);
    };
}])
.config(["toastrConfig", (toastrConfig: any) => {
    angular.extend(toastrConfig, {
        tapToDismiss: true,
        timeOut: 2000,
        positionClass: "toast-top-center",
        allowHtml: true
    });
}]);


module.run(["$rootScope", "$state",  ($rootScope: any, $state: any) =>{

    $(document).on("click", function(event) {
        AnimationHelper.hideSidebarIfClickedOutside(event.target);
    });

    $rootScope.$on("$stateChangeStart", (event: any, toState: any, toStateParams: any, fromState: any) => {
        if(!(toState.name.substr(0, fromState.name.length) === fromState.name)) {
            AnimationHelper.hideSidebar();

        }
    });

}]);

export default module;
