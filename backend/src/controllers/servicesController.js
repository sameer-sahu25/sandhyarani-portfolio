const db = require('../config/db');

// GET /api/services
const getServices = async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM services ORDER BY created_at ASC');
        res.status(200).json({
            success: true,
            data: result.rows
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/services
const createService = async (req, res, next) => {
    const { service_name, description } = req.body;

    try {
        const query = 'INSERT INTO services (service_name, description) VALUES ($1, $2) RETURNING *';
        const params = [service_name, description];
        const result = await db.query(query, params);

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
};

// PUT /api/services/:id
const updateService = async (req, res, next) => {
    const { id } = req.params;
    const { service_name, description } = req.body;

    try {
        const query = 'UPDATE services SET service_name = $1, description = $2 WHERE id = $3 RETURNING *';
        const params = [service_name, description, id];
        const result = await db.query(query, params);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
};

// DELETE /api/services/:id
const deleteService = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await db.query('DELETE FROM services WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Service deleted successfully'
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getServices, createService, updateSkill: updateService, deleteService };
