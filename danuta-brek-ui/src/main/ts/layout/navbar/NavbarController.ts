import AnimationHelper from "../../common/AnimationHelper";
import IRootScopeService = angular.IRootScopeService;

export default class NavbarController {
    constructor(private $rootScope: IRootScopeService, private $state:ng.ui.IStateService) {

    }

    public toggleSidebarMenu(): void {
        AnimationHelper.toggleSidebar();
    }

}