// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Root route handler
app.get('/', (req, res) => {
    res.send('Server is running! Try accessing /welcome endpoint');
});

// Welcome route
app.get('/welcome', (req, res) => {
    res.json({ message: 'Hello, Welcome to simple reactjs and expressjs  website!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Visit http://localhost:${port} to check the server`);
    console.log(`Visit http://localhost:${port}/welcome to get the welcome message`);
});

