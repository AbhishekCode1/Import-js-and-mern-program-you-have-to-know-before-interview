//Middleware in nodejs  

// Import necessary modules
const express = require('express');

// Create an instance of Express
const app = express();

// Middleware function to log requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // Call the next middleware in the chain
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
