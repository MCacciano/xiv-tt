import fetch from '../utils/fetch.js';

export const getAllCards = async (req, res) => {
  try {
    const response = await fetch('https://triad.raelys.com/api/cards');
    const data = await response.json();

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, data: null });
  }
};

export const getCard = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`https://triad.raelys.com/api/cards/${id}`);
    const data = await response.json();

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, data: null });
  }
};
