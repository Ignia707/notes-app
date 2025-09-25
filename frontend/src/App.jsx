// App component
import { useState, useEffect } from "react";
import api from "./services/api";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await api.get("/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h1> Notes </h1>
      <NoteForm onCreated={fetchNotes} />
      <NoteList notes={notes} onUpdated={fetchNotes} />
    </div>
  );
}

export default App;
