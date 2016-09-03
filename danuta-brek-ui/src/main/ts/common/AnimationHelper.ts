export default class AnimationHelper {
  static ANIMATION_TIME = 300;
  static options(key: string, value: string): any {
    let options = {};
    options[key] = value;
    return options;
  }
  static hasOriginOtherThan(element: any, originElement: string): boolean {
    return !$(element).closest(originElement).length;
  }
  static isElementVisible(elementId: string): boolean {
    let $element = $(document.getElementById(elementId));
    return $element.height() > 0 && $element.width() > 0;
  }
  static hide(elementId: string, type: string, callback?: any): void {
    $("#" + elementId).animate(AnimationHelper.options(type, "hide"), AnimationHelper.ANIMATION_TIME, callback);
  }
  static toggle(elementId: string, type: string, callback?: any): void {
    $("#" + elementId).animate(AnimationHelper.options(type, "toggle"), AnimationHelper.ANIMATION_TIME, callback);
  }

  static toggleSidebar() {
    $("body").toggleClass("sidebar-active");
  }

  static hideSidebarIfClickedOutside(
      clickEventTarget: any): void {
    if (AnimationHelper.hasOriginOtherThan(clickEventTarget, "#open-sidebar-menu-button")
        && AnimationHelper.hasOriginOtherThan(clickEventTarget, "#sidebar-wrapper")) {
      //$("body").removeClass("sidebar-active");
    }
  }

  static hideSidebar() {
    //$("body").removeClass("sidebar-active");
  }

  static runCallbackIfPresent(callback: any) {
    if (typeof callback === "function") {
      setTimeout(() => {
        callback();
      }, AnimationHelper.ANIMATION_TIME);
    }
  }
  static hideIfVisible(elementId: string, type: string): void {
    if (AnimationHelper.isElementVisible(elementId)) {
      AnimationHelper.hide(elementId, type);
    }
  }
  static hideIfClickedOutside(
    elementId: string,
    type: string,
    clickEventTarget: any,
    buttonElementId: string,
    paneleElementId: string): void {
    if (AnimationHelper.isElementVisible(elementId)
        && AnimationHelper.hasOriginOtherThan(clickEventTarget, "#" + buttonElementId)
        && AnimationHelper.hasOriginOtherThan(clickEventTarget, "#" + paneleElementId)) {
          AnimationHelper.hide(elementId, type);
    }
  }
}
