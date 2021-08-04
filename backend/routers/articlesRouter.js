import { articles, articleInput } from '../controllers/articlesController.js';

import express from 'express';

const router = express.Router();

router.get('/', articles);

router.post('/', articleInput);

export default router;
