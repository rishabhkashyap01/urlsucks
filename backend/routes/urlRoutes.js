import express from 'express';
import { generateShortUrl, handleRedirect } from '../controllers/urlController.js';

const urlRouter = express.Router();

urlRouter.get('/:shortCode', handleRedirect);
urlRouter.post('/shorten', generateShortUrl);

export default urlRouter;