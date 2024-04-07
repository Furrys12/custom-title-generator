const express = require('express');
const app = express();

// Sample list
const list = ["apple", "banana", "orange", "grape", "kiwi"];

// Define a route to generate the JSON pointer
app.get('/generate-pointer', (req, res) => {
  // Generate random index
  const randomIndex = Math.floor(Math.random() * list.length);

  // Select random item from the list
  const randomItem = list[randomIndex];

  // Create JSON pointer with the selected item
  const jsonPointer = {
    path: `/${randomItem}`
  };

  // Send the JSON pointer as the response
  res.json(jsonPointer);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
