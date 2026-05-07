//NoteForm Component
import api from "../services/api";
import { useState } from "react";

export default function NoteForm({ onCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await api.post("/notes", { title: title.trim(), content: content.trim() });
      setTitle("");
      setContent("");
      onCreated();
    } catch (err) {
      setError("Failed to create note. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ margin: 100 }}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <br />
      <br />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />

      <br />
      <br />

      <button type="submit" disabled={submitting}>
        {submitting ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
