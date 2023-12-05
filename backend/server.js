const express = require('express');
const path = require('path');
const cors = require('cors');  // Tambahkan modul CORS

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Middleware for CORS
app.use(cors());  // Tambahkan middleware CORS

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
const routes = require('./routes');

app.use('/api', routes);

// Server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
