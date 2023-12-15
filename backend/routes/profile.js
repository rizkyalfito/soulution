// backend/routes/profile.js
const express = require('express');


const router = express.Router();
const db = require('../data');

router.post('/update-username', async (req, res) => {
    const { username } = req.body;

    if (username) {
        try {
            // Pastikan pengguna sudah login
            if (req.session.user) {
                // Simpan pembaruan username ke database
                await db.updateUsername(req.session.user.email, username);

                // Perbarui session dengan username yang baru
                req.session.user.username = username;

                res.json({ message: 'Username updated' });
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        } catch (error) {
            console.error('Error during username update', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(400).json({ message: 'Username is required' });
    }
});

module.exports = router;
