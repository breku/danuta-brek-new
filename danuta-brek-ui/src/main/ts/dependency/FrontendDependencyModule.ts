import "jquery";
import "bootstrap";
import "angular";
import "angular-animate";
import "angular-ui-router";
import "angular-translate";
import "angular-toastr";
import "angular-toastr.tpls";
import "angular-filter";
import "toArrayFilter";
import "angular-bootstrap-tpls";
import "angular-cookies";

export default angular.module("app.dependencies.frontend", [
  "ui.router",
  "pascalprecht.translate",
  "ngAnimate",
  "ngCookies",
  "toastr",
  "a8m.group-by",
  "angular-toArrayFilter",
  "ui.bootstrap"
]);
