#!/bin/bash

# IO Tech Task Development Script
# This script helps you start both frontend and backend services

echo "🚀 Starting IO Tech Task Development Environment"
echo "================================================"

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️  Port $1 is already in use"
        return 1
    else
        return 0
    fi
}

# Check if backend port is available
if ! check_port 1337; then
    echo "Please stop the service using port 1337 and try again"
    exit 1
fi

# Check if frontend port is available
if ! check_port 3000; then
    echo "Please stop the service using port 3000 and try again"
    exit 1
fi

echo "📦 Installing dependencies..."

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
if [ ! -d "node_modules" ]; then
    npm install
fi
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
if [ ! -d "node_modules" ]; then
    npm install
fi
cd ..

echo "✅ Dependencies installed successfully!"
echo ""
echo "🌐 Starting services..."
echo ""

# Start backend in background
echo "🔧 Starting Strapi backend (http://localhost:1337/admin)..."
cd backend
npm run develop &
BACKEND_PID=$!
cd ..

# Wait a moment for backend to start
sleep 5

# Start frontend
echo "🎨 Starting Next.js frontend (http://localhost:3000)..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "🎉 Development environment started!"
echo "=================================="
echo "Frontend: http://localhost:3000"
echo "Backend Admin: http://localhost:1337/admin"
echo ""
echo "Press Ctrl+C to stop all services"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Services stopped"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for background processes
wait 