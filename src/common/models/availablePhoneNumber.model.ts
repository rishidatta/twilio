export default class AvailablePhoneNumberModel{
    friendlyName: string;
    phoneNumber: string;
    lata: string;
    rateCenter: string;
    latitude: string;
    longitude: string;
    locality: string;
    region: string;
    postalCode: string;
    isoCountry: string;
    addressRequirements: string;
    beta: boolean;
    capabilities: any;

    constructor(
        friendlyName: string,
        phoneNumber: string,
        lata: string,
        rateCenter: string,
        latitude: string,
        longitude: string,
        locality: string,
        region: string,
        postalCode: string,
        isoCountry: string,
        addressRequirements: string,
        beta: boolean,
        capabilities: any,
    ){
        this.friendlyName = friendlyName;
        this.phoneNumber = phoneNumber;
        this.lata = lata;
        this.rateCenter = rateCenter;
        this.latitude = latitude;
        this.longitude = longitude;
        this.locality = locality;
        this.region = region;
        this.postalCode = postalCode;
        this.isoCountry = isoCountry;
        this.addressRequirements = addressRequirements;
        this.beta = beta;
        this.capabilities = capabilities;
    }
}