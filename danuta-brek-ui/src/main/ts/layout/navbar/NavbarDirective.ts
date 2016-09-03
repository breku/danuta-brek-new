import "angular";

export default class NavbarDirective implements angular.IDirective {
  static NAME = "cdNavbar";
  replace = true;
  scope = {};
  restrict = "A";
  templateUrl = "layout/navbar/navbar.tpl.html";
  controllerAs = "navbarDirective";
  bindToController = true;
  controller: string;
  constructor(controllerName: string) {
    this.controller = controllerName;
  }

}
