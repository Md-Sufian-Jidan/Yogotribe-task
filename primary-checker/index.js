const express = require('express');
const app = express();
const PORT = 3000;

app.get('/is-prime', (req, res) => {
  const num = parseInt(req.query.number, 10);

  if (isNaN(num)) {
    return res.status(400).json({ error: 'Please provide a valid number.' });
  }

  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  res.json({ number: num, isPrime: isPrime(num) });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
