# Catálogo de Carros - Backend API

## Description
Backend REST API for car catalog application with vehicle listing, details, and contact form functionality.

## Features
- Vehicle listing with filtering and sorting
- Vehicle details view
- Contact form submission

## Technology Stack
- Node.js
- Express.js
- TypeScript
- In-memory data storage (no database)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API Version 1
Base URL: `/api/v1`

#### External Routes (Public)
- Available at `/api/v1/external`

#### Internal Routes (Authenticated)
- Available at `/api/v1/internal`

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
└── server.ts         # Application entry point
```

## Development

### Code Standards
- TypeScript strict mode enabled
- 2-space indentation
- Single quotes for strings
- Semicolons required

### Environment Variables
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `API_VERSION` - API version (default: v1)
- `CORS_ORIGINS` - Allowed CORS origins

## License
ISC
