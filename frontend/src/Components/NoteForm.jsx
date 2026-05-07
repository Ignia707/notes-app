//NoteForm Component
import api from "../services/api";
import { useState } from "react";

export default function NoteForm({ onCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (!title) return alert("title required");
    try {
      await api.post("/notes", { title, content });
      setTitle("");
      setContent("");
      setError(null);
      onCreated();
    } catch (err) {
      setError("Failed to create note. Please try again.");
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

      <button type="submit"> Create </button>
    </form>
  );
}
