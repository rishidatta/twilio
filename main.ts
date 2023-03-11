require('express-async-errors');

import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import PhoneNumber from './src/routes/phoneNumber.route';
import Messages from './src/routes/messages.route';
import ErrorHandlerMiddleware from './src/middleware/errorHandler.middleware';

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/available-phone-numbers', PhoneNumber);
app.use('/provision-phone-number', PhoneNumber);
app.use('/messages', Messages);
// app.use(new ErrorHandlerMiddleware().handleError);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
