const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.ALLOWED_ORIGINS || "http://localhost:5173" }));
app.use(express.json({ limit: "50kb" }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API running"));

const notesRouter = require("./routes/notes");
app.use("/api/notes", notesRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  )
  .catch((err) => console.error("MongoDB connection error:", err));
