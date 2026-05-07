# Notes App

A full-stack notes application — create, read, and delete notes with a React frontend and an Express + MongoDB backend.

## Tech Stack

- **Frontend:** React + Vite, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas

## Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd notes-app
```

### 2. Set up the backend

```bash
cd backend
cp .env.example .env   # then fill in your MongoDB URI
npm install
npm start
```

### 3. Set up the frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Environment Variables

**`backend/.env`**

| Variable | Description |
|---|---|
| `PORT` | Port the server runs on (default: `5000`) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `ALLOWED_ORIGINS` | Allowed CORS origin (default: `http://localhost:5173`) |

**`frontend/.env`**

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL (default: `http://localhost:5000/api`) |

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a note |
| GET | `/api/notes/:id` | Get a note by ID |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |
