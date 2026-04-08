const db = require('../config/db');

// POST /api/contact
const submitMessage = async (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
    }

    try {
        const query = 'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *';
        const params = [name, email, message];
        const result = await db.query(query, params);

        res.status(201).json({
            success: true,
            data: result.rows[0],
            message: 'Message sent successfully'
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/messages (Protected)
const getMessages = async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM messages ORDER BY created_at DESC');
        res.status(200).json({
            success: true,
            data: result.rows
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { submitMessage, getMessages };
