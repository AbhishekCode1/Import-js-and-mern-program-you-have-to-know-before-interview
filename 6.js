// simple api in node js with /api

// use routes like http://localhost:3000/api/books

// Import necessary modules
const express = require('express');

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Dummy data - replace with database operations in a real application
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Route to get a specific book by ID
app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

// Route to add a new book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  const id = books.length + 1;
  const newBook = { id, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
