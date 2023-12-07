const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');  // Tambahkan modul CORS

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Middleware for CORS
app.use(cors({ 
    origin: 'http://localhost:9007', // Sesuaikan dengan alamat URL aplikasi frontend Anda
    credentials: true, // Izinkan pengiriman kredensial (contohnya session cookie)
}));

// Middleware for session
app.use(session({
    secret: 'KisameHada21', // Ganti dengan kunci rahasia yang kuat
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true jika menggunakan HTTPS
}));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
const routes = require('./routes');

app.use('/api', routes);

// Server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
