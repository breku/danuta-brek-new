import "angular-translate";

import { IMessageService, MessageType } from "./IMessageService";

let MessageTypeMap: { [key: number]: string; } = {};
MessageTypeMap[MessageType.WIDE] = "toast-wide";

export default class MessageService implements IMessageService {
  constructor(private toastr: any, private $translate: angular.translate.ITranslateService) {
  }
  success(messageKey: string, type?: MessageType): void {
    let toastClass = "toast";
    if (!(typeof type === "undefined")) {
      toastClass += " " + MessageTypeMap[type];
    }
    this.$translate(messageKey).then((translation: string) => {
      this.toastr.success(translation, {
        toastClass: toastClass
      });
    });
  }
}
