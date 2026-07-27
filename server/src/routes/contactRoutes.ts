import { Router } from 'express';
import { handleContactSubmission } from '../controllers/contactController';

const router = Router();

// POST /api/contact
router.post('/contact', handleContactSubmission);

export default router;
