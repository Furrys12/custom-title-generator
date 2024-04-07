// Sample list
const list = ["apple", "banana", "orange", "grape", "kiwi"];

// Generate random index
const randomIndex = Math.floor(Math.random() * list.length);

// Select random item from the list
const randomItem = list[randomIndex];

// Create JSON pointer with the selected item
const jsonPointer = {
  path: `/${randomItem}`
};

// Output the JSON pointer
console.log(JSON.stringify(jsonPointer));
