const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

console.log('Загрузка app.js');

const app = express();
app.use(cors());
app.use(express.json());

console.log('Попытка подключить роутер ../routes/result');
try {
  const resultRoutes = require('../routes/result');
  console.log('Роутер подключен успешно');
  app.use('/api/result', resultRoutes);
} catch (e) {
  console.error('Ошибка подключения роутера:', e.message);
}

app.get('/health', (req, res) => {
  console.log('Запрос /health');
  res.json({ status: 'ok' });
});

app.get('/test', (req, res) => {
  console.log('Запрос /test');
  res.json({ message: 'test работает' });
});

module.exports = app;
