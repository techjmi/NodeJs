const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3011;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle requests for the root path
app.get('/', (req, res) => {
    // Serve the HTML file for the root path
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle form submissions
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Process the user's details as needed
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Respond with a thank you message or redirect to another page
    res.send('Thank you for submitting the form!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
