const express = require('express');
const app = express();

// List of items
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// API endpoint to get a random item
app.get('/api/random-item', (req, res) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];

  res.json({ item: randomItem });
});

// Start the server
app.listen(3000, () => {
  console.log('API server is running on http://localhost:3000');
});