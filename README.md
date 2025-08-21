# IO Tech Task

This project is organized into two main directories:

## Project Structure

```
io-tech-task/
├── frontend/          # Next.js frontend application
├── backend/           # Strapi backend application
├── README.md         # This file
└── .gitignore        # Git ignore rules
```

## Frontend (Next.js)

The frontend is a Next.js application located in the `frontend/` directory.

### Getting Started

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Backend (Strapi)

The backend is a Strapi CMS application located in the `backend/` directory.

### Getting Started

```bash
cd backend
npm install
npm run develop
```

The Strapi admin panel will be available at `http://localhost:1337/admin`

## Development

### Quick Start (Recommended)

Use the development script to start both services simultaneously:

```bash
npm run dev
```

This will:

- Install dependencies for both frontend and backend
- Start the Strapi backend on port 1337
- Start the Next.js frontend on port 3000
- Provide a clean shutdown with Ctrl+C

### Manual Development

To work on both frontend and backend simultaneously:

1. Start the backend first:

   ```bash
   cd backend
   npm run develop
   ```

2. In a new terminal, start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

### Available Scripts

From the root directory, you can use these npm scripts:

```bash
# Development
npm run dev                    # Start both services
npm run dev:frontend          # Start only frontend
npm run dev:backend           # Start only backend

# Installation
npm run install:all           # Install dependencies for both
npm run install:frontend      # Install frontend dependencies
npm run install:backend       # Install backend dependencies

# Building
npm run build:frontend        # Build frontend for production
npm run build:backend         # Build backend for production

# Starting production
npm run start:frontend        # Start frontend in production mode
npm run start:backend         # Start backend in production mode

# Cleaning
npm run clean                 # Clean both projects
npm run clean:frontend        # Clean frontend build files
npm run clean:backend         # Clean backend build files

# Linting
npm run lint:frontend         # Lint frontend code
npm run lint:backend          # Lint backend code
```

## Environment Setup

Make sure to configure environment variables for both applications:

- Frontend: Create `.env.local` in the `frontend/` directory
- Backend: Create `.env` in the `backend/` directory

## Technologies Used

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Strapi CMS, Node.js, TypeScript
