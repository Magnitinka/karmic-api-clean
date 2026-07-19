const app = require('./app');
const PORT = process.env.PORT || 3001;
// Добавьте эту строку, чтобы увидеть реальный порт в логах
console.log(`Порт из окружения: ${process.env.PORT}, финальный порт: ${PORT}`);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
// 👇 СЛУШАЕМ НА ВСЕХ ИНТЕРФЕЙСАХ
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
