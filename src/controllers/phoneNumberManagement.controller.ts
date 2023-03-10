import { Request, Response } from 'express';
import PhoneNumberManagementService from '../services/phoneNumberManagement.service';
import AvailablePhoneNumberModel from '../common/models/availablePhoneNumber.model';
import ProvisionedPhoneNumberModel from '../common/models/provisionedPhoneNumber.model';

export default class PhoneNumberManagementController {
  public async getAvailableNumbers(req: Request, res: Response) {
    const countryCode = String(req.params.countryCode);
    const phoneNumberType = String(req.params.phoneNumberType);
    const phoneNumberServiceInstance: PhoneNumberManagementService =
      new PhoneNumberManagementService();
    const availablePhoneNumbers: AvailablePhoneNumberModel[] =
      await phoneNumberServiceInstance.getAvailableNumbers(
        countryCode,
        phoneNumberType
      );
    res.send(availablePhoneNumbers);
  }

  public async purchasePhoneNumber(req: Request, res: Response) {
    const phoneNumber = String(req.params.phoneNumber);
    const phoneNumberServiceInstance: PhoneNumberManagementService =
      new PhoneNumberManagementService();
    const provisionedPhoneNumberModel: ProvisionedPhoneNumberModel =
      await phoneNumberServiceInstance.purchasePhoneNumber(
        phoneNumber,
      );
    res.send(provisionedPhoneNumberModel);
  }
}
