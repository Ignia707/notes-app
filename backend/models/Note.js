//backend/models/Note.js
const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxLength: 200 },
    content: { type: String, maxLength: 10000 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
