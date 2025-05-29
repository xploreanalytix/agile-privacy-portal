
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

// Route to handle base requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
