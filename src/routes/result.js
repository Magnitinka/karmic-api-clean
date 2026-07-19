const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Маршрут работает (GET)' });
});

router.post('/', (req, res) => {
  const { name, birthdate } = req.body;
  if (!name || !birthdate) {
    return res.status(400).json({ error: 'Имя и дата обязательны' });
  }
  res.json({
    free: {
      lifePath: { number: 1, description: 'Лидер' },
      soulUrge: { number: 2, description: 'Гармония' },
      destiny: { number: 3, description: 'Творец' }
    },
    paid: {
      karmicTasks: [
        { number: 4, description: 'Стабильность' },
        { number: 5, description: 'Приключения' }
      ],
      compatibility: { score: 80, description: 'Высокая совместимость' }
    }
  });
});

module.exports = router;
