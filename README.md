# Notes App

A simple full-stack Notes application built with **React.js** (frontend), **Node.js + Express** (backend), and **MongoDB Atlas** (database).

## Features

- Create, read, update, and delete notes (CRUD operations)
- RESTful API with Express.js
- MongoDB Atlas for cloud database
- CORS enabled for frontend-backend communication
- JSON request/response handling

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Middleware: CORS, dotenv

## Installation

1. Clone the repo:

   ```bash
   git clone <your-repo-url>
   cd notes-app/backend

   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the backend folder with:

   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-atlas-connection-string>
   ```

4. Start the backend server:

   ```bash
   node server.js
   ```

5. Frontend setup (React):

   ```bash
   npm install
   npm run dev
   ```
