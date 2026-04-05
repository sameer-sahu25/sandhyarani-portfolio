# Sandhyaa B Portfolio Backend

A modern, scalable, and secure backend system for a design portfolio website.

## Tech Stack
- **Node.js & Express.js**: Server-side framework.
- **Neon Database (PostgreSQL)**: Managed relational database.
- **JWT**: For secure authentication.
- **Bcrypt.js**: For password hashing.
- **Helmet.js & CORS**: For enhanced security.
- **Morgan & Winston**: For logging.

## Project Structure
```
/Backend
├── /src
│   ├── /config         # Database and app configurations
│   ├── /controllers    # Logic for handling requests
│   ├── /middlewares    # Authentication and error handling
│   ├── /models         # Database interaction (SQL queries)
│   ├── /routes         # API endpoint definitions
│   ├── /utils          # Helper functions
│   ├── /db             # SQL schema and seed scripts
│   ├── app.js          # Express application setup
│   └── server.js       # Entry point for the server
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Documentation
```

## Features
1. **Authentication**: Secure admin login with JWT and password hashing.
2. **Projects Management**: Full CRUD for portfolio projects with pagination and filtering.
3. **Contact Form**: API to handle and store contact messages from visitors.
4. **Skills Section**: Manage design skills and expertise levels.
5. **Services Section**: Flexible schema for showcasing professional services.
6. **Security**: Rate limiting, Helmet protection, and secure input handling.

## Getting Started

### 1. Installation
```bash
npm install
```

### 2. Setup Environment Variables
Create a `.env` file in the root directory (refer to `.env.example`).
```env
PORT=5000
DATABASE_URL=your_neon_db_url
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@sandhyaa.com
ADMIN_PASSWORD=AdminPassword123
```

### 3. Initialize Database
Run the seed script to create tables and the initial admin user.
```bash
npm run seed
```

### 4. Run the Server
For development (with nodemon):
```bash
npm run dev
```
For production:
```bash
npm start
```

## API Documentation

### Auth
- `POST /api/auth/login` - Admin login

### Projects
- `GET /api/projects` - Get all projects (public)
- `POST /api/projects` - Create new project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Skills
- `GET /api/skills` - Get all skills (public)
- `POST /api/skills` - Create new skill (admin)
- `PUT /api/skills/:id` - Update skill (admin)
- `DELETE /api/skills/:id` - Delete skill (admin)

### Contact
- `POST /api/contact` - Submit contact message (public)
- `GET /api/contact/messages` - View messages (admin)

### Services
- `GET /api/services` - Get all services (public)
- `POST /api/services` - Create new service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

## API Testing Examples (cURL)

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email": "admin@sandhyaa.com", "password": "AdminPassword123"}'
```

### Create Project
```bash
curl -X POST http://localhost:5000/api/projects \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{"title": "My New Project", "description": "Amazing design work", "tags": ["UX", "UI"]}'
```
