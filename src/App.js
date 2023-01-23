import React from "react";
import ReactDOM from "react-dom/client";
import TextAreaNote from "./component/note";
import "bootstrap/dist/css/bootstrap.css";
import Split from "react-split";
import "./style.css";
import NoteSummery from "./component/NoteSummery";
import InputField from "./component/InputField";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  return (
    <main>
      <Split sizes={[30, 70]} direction="horizontal" className="split">
        <NoteSummery
          notes={notes}
          newNote={createNewNote}
          currentNote={findCurrentNote()}
          setCurrentNoteId={setCurrentNoteId}
        />
        <InputField currentNote={findCurrentNote()} updateNote={updateNote} />
      </Split>
    </main>
  );
}