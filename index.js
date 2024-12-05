const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { convertStringToJson, validateJson } = require('./controllers/convertController');

const app = express();
const port = 3000;


// Middleware to parse text/plain bodies
app.use(bodyParser.text());
app.use(express.json())

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use the controller for the convert route
app.post('/convert', convertStringToJson);

// New validate route
app.post('/validate', validateJson);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
