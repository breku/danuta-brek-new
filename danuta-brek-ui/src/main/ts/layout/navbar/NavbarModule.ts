import FrontedDependencies from "../../dependency/FrontendDependencyModule";
import NavbarDirective from "./NavbarDirective";
import NavbarController from "./NavbarController";

let module = angular.module("layout.navbar", [FrontedDependencies.name]);

module.controller("NavbarController", ["$rootScope", "$state", NavbarController]);

module.directive(NavbarDirective.NAME, () => {
  return new NavbarDirective("NavbarController");
});

export default module;