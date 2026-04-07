# Sandhyarani's Design Canvas - Portfolio Project

This is a full-stack portfolio website for **Sandhyarani Pursi**, a product designer. The project consists of a React-based frontend and a Node.js/Express backend with a PostgreSQL database.

## Project Structure

The project is divided into two main directories:

- **[Backend](./Backend)**: Node.js/Express API with PostgreSQL (Neon DB).
- **[Fortnend](./Fortnend)**: React + Vite + Tailwind CSS frontend.

## Getting Started

To run the entire project locally, follow the steps for both the backend and frontend.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **PostgreSQL** (or a [Neon](https://neon.tech/) database instance)
- **npm** or **bun**

---

### 1. Backend Setup

1.  Navigate to the `Backend` directory:
    ```bash
    cd Backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure environment variables:
    - Create a `.env` file based on `.env.example`.
    - Provide your `DATABASE_URL` and `JWT_SECRET`.
4.  Initialize the database (run migrations/seeds):
    ```bash
    npm run seed
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```

For more details, see the [Backend README](./Backend/README.md).

---

### 2. Frontend Setup

1.  Navigate to the `Fortnend` directory:
    ```bash
    cd Fortnend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at `http://localhost:5173`.

For more details, see the [Frontend README](./Fortnend/README.md).

## Tech Stack Summary

- **Frontend**: React, Vite, Tailwind CSS, Shadcn UI, Framer Motion, Lucide Icons, React Query, Zod.
- **Backend**: Node.js, Express.js, PostgreSQL (Neon DB), JWT, Bcrypt.js, Helmet, Morgan.
- **Tools**: Vitest (Testing), Playwright (E2E Testing), ESLint.

## Features

- **Dynamic Portfolio**: Projects, skills, and services are managed via the backend.
- **Admin Dashboard**: Secure login for managing content.
- **Contact Form**: Direct messaging capability for visitors.
- **Responsive Design**: Fully optimized for mobile and desktop.
- **Smooth Animations**: Interactive UI with Framer Motion.

---

Created with ❤️ for Sandhyarani Pursi.
