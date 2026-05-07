// backend/routes/notes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Note = require("../models/Note");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET /api/notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/notes
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to create note" });
  }
});

// GET /api/notes/:id
router.get("/:id", async (req, res) => {
  if (!isValidId(req.params.id))
    return res.status(400).json({ error: "Invalid note ID" });
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: "Not found" });
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/notes/:id
router.put("/:id", async (req, res) => {
  if (!isValidId(req.params.id))
    return res.status(400).json({ error: "Invalid note ID" });
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!note) return res.status(404).json({ error: "Not found" });
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/notes/:id
router.delete("/:id", async (req, res) => {
  if (!isValidId(req.params.id))
    return res.status(400).json({ error: "Invalid note ID" });
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
