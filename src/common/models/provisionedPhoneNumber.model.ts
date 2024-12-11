export default class ProvisionedPhoneNumberModel {
  accountSid: string;
  addressRequirements: string;
  addressSid: string;
  apiVersion: string;
  beta: boolean;
  capabilities: any;
  dateCreated: Date;
  dateUpdated: Date;
  emergencyStatus: string;
  emergencyAddressSid: string;
  emergencyAddressStatus: string;
  friendlyName: string;
  identitySid: string;
  origin: string;
  phoneNumber: string;
  sid: string;
  smsApplicationSid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  statusCallback: string;
  statusCallbackMethod: string;
  trunkSid: string;
  uri: string;
  voiceApplicationSid: string;
  voiceCallerIdLookup: boolean;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
  bundleSid: string;
  voiceReceiveMode: string;
  status: string;

  constructor(
    accountSid: string,
    addressSid: string,
    addressRequirements: string,
    apiVersion: string,
    beta: boolean,
    capabilities: any,
    dateCreated: Date,
    dateUpdated: Date,
    friendlyName: string,
    identitySid: string,
    phoneNumber: string,
    origin: string,
    sid: string,
    smsApplicationSid: string,
    smsFallbackMethod: string,
    smsFallbackUrl: string,
    smsMethod: string,
    smsUrl: string,
    statusCallback: string,
    statusCallbackMethod: string,
    trunkSid: string,
    uri: string,
    voiceReceiveMode: string,
    voiceApplicationSid: string,
    voiceCallerIdLookup: boolean,
    voiceFallbackMethod: string,
    voiceFallbackUrl: string,
    voiceMethod: string,
    voiceUrl: string,
    emergencyStatus: string,
    emergencyAddressSid: string,
    emergencyAddressStatus: string,
    bundleSid: string,
    status: string
  ) {
    this.accountSid = accountSid;
    this.addressRequirements = addressRequirements;
    this.addressSid = addressSid;
    this.apiVersion = apiVersion;
    this.beta = beta;
    this.capabilities = capabilities;
    this.dateCreated = dateCreated;
    this.dateUpdated = dateUpdated;
    this.emergencyStatus = emergencyStatus;
    this.emergencyAddressSid = emergencyAddressSid;
    this.emergencyAddressStatus = emergencyAddressStatus;
    this.friendlyName = friendlyName;
    this.identitySid = identitySid;
    this.origin = origin;
    this.phoneNumber = phoneNumber;
    this.sid = sid;
    this.smsApplicationSid = smsApplicationSid;
    this.smsFallbackMethod = smsFallbackMethod;
    this.smsFallbackUrl = smsFallbackUrl;
    this.smsMethod = smsMethod;
    this.smsUrl = smsUrl;
    this.statusCallback = statusCallback;
    this.statusCallbackMethod = statusCallbackMethod;
    this.trunkSid = trunkSid;
    this.uri = uri;
    this.voiceApplicationSid = voiceApplicationSid;
    this.voiceCallerIdLookup = voiceCallerIdLookup;
    this.voiceFallbackMethod = voiceFallbackMethod;
    this.voiceFallbackUrl = voiceFallbackUrl;
    this.voiceMethod = voiceMethod;
    this.voiceUrl = voiceUrl;
    this.bundleSid = bundleSid;
    this.voiceReceiveMode = voiceReceiveMode;
    this.status = status;
  }
}