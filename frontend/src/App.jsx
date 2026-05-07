// App component
import { useState, useEffect } from "react";
import api from "./services/api";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to load notes. Is the server running?");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h1> Notes </h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <NoteForm onCreated={fetchNotes} />
      <NoteList notes={notes} onUpdated={fetchNotes} />
    </div>
  );
}

export default App;
