const bcrypt = require('bcryptjs');
const db = require('../config/db');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const seed = async () => {
    try {
        console.log('Starting Database Seeding...');

        // 1. Create Tables
        const schemaPath = path.join(__dirname, 'schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');
        await db.query(schemaSql);
        console.log('Tables created successfully.');

        // 2. Create Initial Admin
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@sandhyaa.com';
        const adminPassword = process.env.ADMIN_PASSWORD || 'AdminPassword123';
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        const checkAdmin = await db.query('SELECT * FROM admins WHERE email = $1', [adminEmail]);
        if (checkAdmin.rows.length === 0) {
            await db.query(
                'INSERT INTO admins (name, email, password) VALUES ($1, $2, $3)',
                ['Admin User', adminEmail, hashedPassword]
            );
            console.log(`Admin user created: ${adminEmail}`);
        } else {
            console.log(`Admin user already exists: ${adminEmail}`);
        }

        console.log('Seeding completed successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Error during seeding:', err);
        process.exit(1);
    }
};

seed();
