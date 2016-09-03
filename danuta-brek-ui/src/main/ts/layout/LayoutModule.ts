import "angular";

import NavbarModule from "./navbar/NavbarModule";
import SidebarModule from "./sidebar/SidebarModule";
let module = angular.module("layout", [NavbarModule.name, SidebarModule.name]);

export default module;
