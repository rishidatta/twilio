import ReceivedMessageModel from "../common/models/receivedMessage.model";

export default class MessagesService {
  public processReceivedMessage(data: any): ReceivedMessageModel {
    const { From, To, Body, SmsMessageSid, AccountSid } = data;
    const receivedMessageModel: ReceivedMessageModel = new ReceivedMessageModel(
      From,
      To,
      Body,
      SmsMessageSid,
      AccountSid
    );
    return receivedMessageModel;
  }
}