import express from 'express';
import { generateShortUrl } from '../controllers/urlController.js';

const urlRouter = express.Router();

urlRouter.post('/shorten', generateShortUrl);

export default urlRouter;