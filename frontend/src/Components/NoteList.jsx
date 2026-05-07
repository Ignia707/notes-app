// NoteList component
import api from "../services/api";

export default function NoteList({ notes, onUpdated }) {
  const remove = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      onUpdated();
    } catch (err) {
      alert("Failed to delete note. Please try again.");
    }
  };

  return (
    <div>
      {notes.map(({ _id, title, content, createdAt }) => (
        <div
          key={_id}
          style={{ border: "1px solid #ddd", padding: 8, marginBottom: 8 }}
        >
          <h3> {title} </h3>
          <p> {content} </p>
          <small> {new Date(createdAt).toLocaleString()} </small>
          <br />
          <button onClick={() => remove(_id)}> Delete </button>
        </div>
      ))}
    </div>
  );
}
