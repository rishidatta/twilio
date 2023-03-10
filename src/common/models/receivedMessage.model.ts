export default class ReceivedMessageModel {
  from: string;
  to: string;
  body: string;
  smsMessageSid: string;
  accountSid: string;

  constructor(
    from: string,
    to: string,
    body: string,
    smsMessageSid: string,
    accountSid: string
  ) {
    this.from = from;
    this.to = to;
    this.body = body;
    this.smsMessageSid = smsMessageSid;
    this.accountSid = accountSid;
  }
}
