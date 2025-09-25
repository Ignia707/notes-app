//NoteForm Component
import api from "../services/api";
import { useState } from "react";

export default function NoteForm({ onCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!title) return alert("title required");
    await api.post("/notes", { title, content });
    setTitle("");
    setContent("");
    onCreated();
  };

  return (
    <form onSubmit={submit} style={{ margin: 100 }}>
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
