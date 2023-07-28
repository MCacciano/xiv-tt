import { Router } from 'express';
import {
  getAllCards,
  getCardDetails,
  getNewDeck,
} from '../controllers/cards.js';

const router = Router();

router.route('/').get(getAllCards);
router.route('/new-deck').get(getNewDeck);
router.route('/:id').get(getCardDetails);

export default router;
