import { Request, Response } from 'express';
import PhoneNumberService from '../services/phoneNumber.service';
import AvailablePhoneNumberModel from '../common/models/phoneNumber.model';
import ProvisionedPhoneNumberModel from '../common/models/provisionedPhoneNumber.model';

export default class PhoneNumberController {
  public async getAvailableNumbers(req: Request, res: Response) {
    const countryCode = String(req.params.countryCode);
    const phoneNumberType = String(req.params.phoneNumberType);
    const phoneNumberServiceInstance: PhoneNumberService =
      new PhoneNumberService();
    const availablePhoneNumbers: AvailablePhoneNumberModel[] =
      await phoneNumberServiceInstance.getAvailableNumbers(
        countryCode,
        phoneNumberType
      );
    res.send(availablePhoneNumbers);
  }

  public async provisionPhoneNumber(req: Request, res: Response) {
    const phoneNumber = String(req.params.phoneNumber);
    const phoneNumberServiceInstance: PhoneNumberService =
      new PhoneNumberService();
    const provisionedPhoneNumberModel: ProvisionedPhoneNumberModel =
      await phoneNumberServiceInstance.provisionPhoneNumber(
        phoneNumber,
      );
    res.send(provisionedPhoneNumberModel);
  }
}
