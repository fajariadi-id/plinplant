import { plants, plant } from '../controllers/plantsController.js';
import express from 'express';

const router = express.Router();

router.get('/', plants);
router.get('/:id', plant);

export default router;
