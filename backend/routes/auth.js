// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const db = require('../data');

// Implementasi logika login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        try {
            const user = await db.getUserByEmail(email);

            if (user) {
                const match = await bcrypt.compare(password, user.password);

                if (match) {
                    res.json({ message: 'Login successful' });
                } else {
                    res.status(401).json({ message: 'Invalid email or password' });
                }
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(400).json({ message: 'Email and password are required' });
    }
});

// Implementasi logika signup
router.post('/signup', async (req, res) => {
    const { email, password, username } = req.body;

    if (email && password && username) {
        try {
            const existingUser = await db.getUserByEmail(email);

            if (!existingUser) {
                const hashedPassword = await bcrypt.hash(password, 10);
                await db.createUser({ email, password: hashedPassword, username });
                res.json({ message: 'Signup successful' });
            } else {
                res.status(400).json({ message: 'Email is already in use' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(400).json({ message: 'Email, password, and username are required' });
    }
});

module.exports = router;
