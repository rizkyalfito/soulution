// backend/data/index.js
const pool = require('./db');

module.exports = {
    getUserByEmail: async (email) => new Promise((resolve, reject) => {
            pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(results[0]);
            });
        }),

    createUser: async (user) => new Promise((resolve, reject) => {
            pool.query('INSERT INTO users SET ?', user, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(results);
            });
        }),

    // Tambahan fungsi database sesuai kebutuhan
};
