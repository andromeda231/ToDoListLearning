import React from "react";
import Button from "react-bootstrap/Button";

export default function NoteSummery(props) {
  const noteElements = props.notes.map((note) => (
    <div key={note.id}>
      <div
        className="list-group"
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <a
          href="#"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{note.body.split("\n")[0]}</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">{note.body.split("\n")[1]}</p>
          <small>{note.body.split("\n")[2]}</small>
        </a>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar sticky">
      <div className="d-grid gap-2 newNote">
        <Button variant="primary" size="lg" onClick={props.newNote}>
          New ToDo
        </Button>
      </div>
      <div>{noteElements}</div>
    </section>
  );
}
