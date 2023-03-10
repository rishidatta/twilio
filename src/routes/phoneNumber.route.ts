import express from 'express';
import PhoneNumberController from '../controllers/phoneNumber.controller';

const router = express.Router();

router.get(
  '/:countryCode/:phoneNumberType',
  new PhoneNumberController().getAvailableNumbers
);
router.post(
  '/:phoneNumber',
  new PhoneNumberController().provisionPhoneNumber
);

export default router;
