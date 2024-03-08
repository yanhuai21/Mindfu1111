const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to Mindful! Our online meditation platform is dedicated to helping you find inner peace and balance through guided meditations and mindfulness exercises.');
});

app.get('/meditations', (req, res) => {
  res.send('Choose from a wide range of guided meditations designed to help you find inner peace and balance, regardless of your experience level.');
});

app.get('/mindfulness', (req, res) => {
  res.send('Access our collection of mindfulness exercises to help you stay present and centered throughout the day.');
});

app.get('/register', (req, res) => {
  res.send('Ready to find inner peace and balance? Register for our platform today and start your meditation journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('Mindful server is running on port 3000.');
});