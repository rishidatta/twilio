import { Request, Response } from 'express';
import ReceivedMessageModel from '../common/models/receivedMessage.model';
import MessagesService from '../services/messages.service';

export default class MessagesController {

  public receiveMessageWebhook(req: Request, res: Response): void {
    const data: any = req.body;
    const messagesServiceInstance: MessagesService = new MessagesService();
    const receivedMessageModel: ReceivedMessageModel =
      messagesServiceInstance.processReceivedMessage(data);
    console.log(receivedMessageModel);
  }
}
