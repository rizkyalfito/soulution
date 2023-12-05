// backend/routes/index.js
const express = require('express');

const router = express.Router();
const authRoutes = require('./auth');

// Gunakan rute auth
router.use('/auth', authRoutes);

// ... (tambahkan rute lainnya jika ada)

module.exports = router;
