import express from 'express';
import PhoneNumberManagementController from '../controllers/phoneNumberManagement.controller';

const router = express.Router();

router.get(
  '/:countryCode/:phoneNumberType',
  new PhoneNumberManagementController().getAvailableNumbers
);
router.post(
  '/:phoneNumber',
  new PhoneNumberManagementController().purchasePhoneNumber
);

export default router;
