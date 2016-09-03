export let NAME = "IMessageService";

export enum MessageType {
  WIDE
};

export interface IMessageService {
  success(messageKey: string, type?: MessageType): void;
};
