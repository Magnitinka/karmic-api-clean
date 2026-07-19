console.log("=== Сервер запустился ===");
console.log("Текущая директория:", __dirname);
const app = require('./app');
const PORT = process.env.PORT || 3000;

console.log('Запуск сервера, порт:', PORT);
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
app.get('/health', (req, res) => {
  res.json({ status: "OK", message: "Сервер работает" });
});
