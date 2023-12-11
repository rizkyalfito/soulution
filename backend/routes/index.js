// backend/routes/index.js
const express = require('express');

const router = express.Router();
const authRoutes = require('./auth');
const profileRoutes = require('./profile');

// Gunakan rute auth
router.use('/auth', authRoutes);

router.use('/profile', profileRoutes);

// ... (tambahkan rute lainnya jika ada)

module.exports = router;
