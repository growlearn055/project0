const express = require('express');
const path = require('path');

const app = express();
const port = 5173; // Change this to the desired port number

// Serve static files from the "dist" folder
app.use(express.static(path.join(__dirname, 'dist')));

// Route all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://<your-public-ip>:${port}`);
});

