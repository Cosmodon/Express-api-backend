import express from 'express';
import { messagesPage } from '../controllers/messages';
import { indexPage } from '../controllers/home';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);

export default indexRouter;
