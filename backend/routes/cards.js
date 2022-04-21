import { Router } from 'express';
import { getAllCards, getCard } from '../controllers/cards.js';

const router = Router();

router.route('/').get(getAllCards);
router.route('/:id').get(getCard);

export default router;
