import { reviews } from '../controllers/reviewsController.js';

import express from 'express';

const router = express.Router();

router.get('/:id', reviews);

export default router;
