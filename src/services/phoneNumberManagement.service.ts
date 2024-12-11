import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import AvailablePhoneNumberModel from '../common/models/availablePhoneNumber.model';
import ProvisionedPhoneNumberModel from '../common/models/provisionedPhoneNumber.model';

export default class PhoneNumberManagementService {
  public async getAvailableNumbers(
    countryCode: string,
    phoneNumberType: string
  ): Promise<AvailablePhoneNumberModel[]> {
    const availablePhoneNumbers: AvailablePhoneNumberModel[] = [];
    const accountSid = String(process.env.ACCOUNT_SID);
    const accountSecret = String(process.env.ACCOUNT_SECRET);
    const url: string = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/AvailablePhoneNumbers/${countryCode}/${phoneNumberType}.json?`;
    const config: AxiosRequestConfig = {
      url,
      method: 'get',
      auth: {
        username: accountSid,
        password: accountSecret,
      },
    };
    const response: AxiosResponse = await axios(config);
    response.data.available_phone_numbers.forEach((phoneNumber: any) => {
      availablePhoneNumbers.push(
        new AvailablePhoneNumberModel(
          phoneNumber.friendly_name,
          phoneNumber.phone_number,
          phoneNumber.lata,
          phoneNumber.rate_center,
          phoneNumber.latitude,
          phoneNumber.longitude,
          phoneNumber.locality,
          phoneNumber.region,
          phoneNumber.postal_code,
          phoneNumber.iso_country,
          phoneNumber.address_requirements,
          phoneNumber.beta,
          phoneNumber.capabilities
        )
      );
    });
    return availablePhoneNumbers;
  }

  public async purchasePhoneNumber(
    phoneNumber: string
  ): Promise<ProvisionedPhoneNumberModel> {
    const accountSid = String(process.env.ACCOUNT_SID);
    const accountSecret = String(process.env.ACCOUNT_SECRET);
    const client = require('twilio')(accountSid, accountSecret);
    const response = await client.incomingPhoneNumbers
      .create({
        phoneNumber,
        smsUrl:
          `${String(process.env.API_BASE_URL)}/messages/webhook`,
      })
      .then((incoming_phone_number: any) => incoming_phone_number);
    const provisionedPhoneNumberModel: ProvisionedPhoneNumberModel =
      new ProvisionedPhoneNumberModel(
        response.accountSid,
        response.addressSid,
        response.addressRequirements,
        response.apiVersion,
        response.beta,
        response.capabilities,
        response.dateCreated,
        response.dateUpdated,
        response.friendlyName,
        response.identitySid,
        response.phoneNumber,
        response.origin,
        response.sid,
        response.smsApplicationSid,
        response.smsFallbackMethod,
        response.smsFallbackUrl,
        response.smsMethod,
        response.smsUrl,
        response.statusCallback,
        response.statusCallbackMethod,
        response.trunkSid,
        response.uri,
        response.voiceReceiveMode,
        response.voiceApplicationSid,
        response.voiceCallerIdLookup,
        response.voiceFallbackMethod,
        response.voiceFallbackUrl,
        response.voiceMethod,
        response.voiceUrl,
        response.emergencyStatus,
        response.emergencyAddressSid,
        response.emergencyAddressStatus,
        response.bundleSid,
        response.status
      );
    return provisionedPhoneNumberModel;
  }
}
