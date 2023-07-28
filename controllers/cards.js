import fs from 'fs';

import asyncController from '../middleware/async.js';
import ErrorResponse from '../utils/errorResponse.js';

const CARDS = JSON.parse(fs.readFileSync('_data/cards.json'));

const getCardsByStars = (cards = [], stars = null) => {
  const cardStarLookup = {
    1: 'oneStarCards',
    2: 'twoStarCards',
    3: 'threeStarCards',
    4: 'fourStarCards',
    5: 'fiveStarCards',
  };

  const cardsByRank = cards.reduce(
    (acc, card) => {
      acc[cardStarLookup[card.stars]].push(card);

      return acc;
    },
    {
      oneStarCards: [],
      twoStarCards: [],
      threeStarCards: [],
      fourStarCards: [],
      fiveStarCards: [],
    }
  );

  if (!stars) return cardsByRank;

  return cardsByRank[cardStarLookup[stars]];
};

export const getAllCards = asyncController(async (req, res, next) => {
  const {
    query: { stars = null },
  } = req;

  let cards = CARDS;

  if (stars) {
    cards = getCardsByStars(cards, stars);
  }

  res.status(200).json({ success: true, data: cards });
});

export const getCardDetails = asyncController(async (req, res, next) => {
  const card = CARDS.find(card => card?.id === parseInt(req.params.id));

  if (!card) {
    return next(
      new ErrorResponse(
        `Card with the id ${req.params.id} can not be found.`,
        400
      )
    );
  }

  res.status(200).json({ success: true, data: card });
});

export const getNewDeck = asyncController(async (req, res, next) => {
  const {
    oneStarCards,
    twoStarCards,
    threeStarCards,
    fourStarCards,
    fiveStarCards,
  } = getCardsByStars(CARDS);

  const newDeck = [];

  // TODO: there must be a better way to do this...
  while (newDeck.length < 5) {
    if (newDeck.length < 1) {
      while (newDeck.length < 1) {
        newDeck.push(
          oneStarCards[Math.floor(Math.random() * oneStarCards.length)]
        );
      }
    }

    if (newDeck.length < 2) {
      while (newDeck.length < 2) {
        newDeck.push(
          twoStarCards[Math.floor(Math.random() * twoStarCards.length)]
        );
      }
    }

    if (newDeck.length < 3) {
      while (newDeck.length < 3) {
        newDeck.push(
          threeStarCards[Math.floor(Math.random() * threeStarCards.length)]
        );
      }
    }

    if (newDeck.length < 4) {
      while (newDeck.length < 4) {
        newDeck.push(
          fourStarCards[Math.floor(Math.random() * fourStarCards.length)]
        );
      }
    }

    if (newDeck.length < 5) {
      while (newDeck.length < 5) {
        newDeck.push(
          fiveStarCards[Math.floor(Math.random() * fiveStarCards.length)]
        );
      }
    }
  }

  res.status(200).json({ success: true, data: newDeck });
});
