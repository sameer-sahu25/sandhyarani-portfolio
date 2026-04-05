const db = require('../config/db');

// GET /api/skills
const getSkills = async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM skills ORDER BY created_at ASC');
        res.status(200).json({
            success: true,
            data: result.rows
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/skills
const createSkill = async (req, res, next) => {
    const { skill_name, level } = req.body;

    try {
        const query = 'INSERT INTO skills (skill_name, level) VALUES ($1, $2) RETURNING *';
        const params = [skill_name, level];
        const result = await db.query(query, params);

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
};

// PUT /api/skills/:id
const updateSkill = async (req, res, next) => {
    const { id } = req.params;
    const { skill_name, level } = req.body;

    try {
        const query = 'UPDATE skills SET skill_name = $1, level = $2 WHERE id = $3 RETURNING *';
        const params = [skill_name, level, id];
        const result = await db.query(query, params);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
};

// DELETE /api/skills/:id
const deleteSkill = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await db.query('DELETE FROM skills WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Skill deleted successfully'
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };
