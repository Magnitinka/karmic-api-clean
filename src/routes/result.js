const express = require('express');
const router = express.Router();

console.log('Файл result.js загружен');

router.get('/', (req, res) => {
  console.log('GET /api/result');
  res.json({ message: 'Маршрут работает (GET)' });
});

router.post('/', (req, res) => {
  console.log('POST /api/result');
  const { name, birthdate } = req.body;
  if (!name || !birthdate) {
    return res.status(400).json({ error: 'Имя и дата обязательны' });
  }
  res.json({
    free: { lifePath: { number: 1, description: 'Лидер' } },
    paid: { karmicTasks: [{ number: 4, description: 'Стабильность' }] }
  });
});

module.exports = router;
