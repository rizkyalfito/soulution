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
                    // Set session
                    req.session.user = user;

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

router.post('/signup', async (req, res) => {
    const { email, password, username } = req.body;

    if (email && password && username) {
        try {
            const existingUser = await db.getUserByEmail(email);

            if (!existingUser) {
                const hashedPassword = await bcrypt.hash(password, 10);
                await db.createUser({ email, password: hashedPassword, username });

                // Set session
                req.session.user = { email, username };

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

router.get('/logout', (req, res) => {
    // Hapus session
    req.session.destroy((err) => {
        if (err) {
            console.error('Error during logout:', err);
            res.status(500).json({ message: 'Internal Server Error during logout' });
        } else {
            res.json({ message: 'Logout successful' });
        }
    });
});

router.get('/check-session', (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

module.exports = router;
