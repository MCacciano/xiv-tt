import fs from 'fs';

const cards = JSON.parse(fs.readFileSync('_data/cards.json'));

export const getAllCards = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: cards });
  } catch (err) {
    res.status(500).json({ success: false, data: null });
  }
};

export const getCard = async (req, res) => {
  const { id } = req.params;

  const card = cards.find(card => card?.id === parseInt(id));

  if (!card) {
    return res.status(400).json({ success: false, error: 'Card Not Found' });
  }

  try {
    res.status(200).json({ success: true, data: card });
  } catch (err) {
    res.status(500).json({ success: false, data: null });
  }
};
