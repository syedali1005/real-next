import express from 'express';
import handler from '../controllers/register.js';

const router = express.Router();

router.post('/register', handler);

export default router;
