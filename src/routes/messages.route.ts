import express from 'express';
import MessagesController from '../controllers/messages.controller';

const router = express.Router();

router.post('/webhook', new MessagesController().receiveMessageWebhook);

export default router;
