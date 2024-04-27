// Routing in nodejs

// Import necessary modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

// Define a wildcard route for handling 404 errors
app.get('*', (req, res) => {
  res.status(404).send('404 Page Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
