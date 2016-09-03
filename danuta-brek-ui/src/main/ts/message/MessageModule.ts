import "angular";
import FrontedDependencies from "../dependency/FrontendDependencyModule";

import { NAME as MessageServiceName } from "./IMessageService";
import MessageService from "./MessageService";

let module = angular.module("messages", [FrontedDependencies.name]);

module.service(MessageServiceName, ["toastr", "$translate", MessageService]);

export default module;
