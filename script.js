function login() {
    alert("Login functionality will be implemented soon!");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us. We will get back to you soon!');
});




const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Basic route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to CouponHub!');
});

// Login route placeholder
app.post('/login', (req, res) => {
    // For now, just send a message
    res.send('Login functionality will be implemented soon!');
});

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

















































