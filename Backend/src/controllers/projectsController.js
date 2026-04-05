const db = require('../config/db');

// GET /api/projects
const getProjects = async (req, res, next) => {
    try {
        const { category, page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        let query = 'SELECT * FROM projects';
        let params = [];

        if (category) {
            query += ' WHERE category = $1';
            params.push(category);
        }

        query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
        params.push(limit, offset);

        const result = await db.query(query, params);
        const countResult = await db.query('SELECT COUNT(*) FROM projects' + (category ? ' WHERE category = $1' : ''), category ? [category] : []);

        res.status(200).json({
            success: true,
            data: result.rows,
            pagination: {
                total: parseInt(countResult.rows[0].count),
                page: parseInt(page),
                limit: parseInt(limit)
            }
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/projects
const createProject = async (req, res, next) => {
    const { title, description, image_url, tags, category } = req.body;

    try {
        const query = 'INSERT INTO projects (title, description, image_url, tags, category) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const params = [title, description, image_url, tags, category];
        const result = await db.query(query, params);

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
};

// PUT /api/projects/:id
const updateProject = async (req, res, next) => {
    const { id } = req.params;
    const { title, description, image_url, tags, category } = req.body;

    try {
        const query = 'UPDATE projects SET title = $1, description = $2, image_url = $3, tags = $4, category = $5 WHERE id = $6 RETURNING *';
        const params = [title, description, image_url, tags, category, id];
        const result = await db.query(query, params);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    } catch (err) {
        next(err);
    }
};

// DELETE /api/projects/:id
const deleteProject = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await db.query('DELETE FROM projects WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Project deleted successfully'
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
