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
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <Button onClick={(event) => props.deleteNote(event, note.id)}>
                -
              </Button>
              {note.body.split("\n")[0]}
            </h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">{note.body.split("\n")[1]}</p>
          <small>{note.body.split("\n")[2]}</small>
        </a>
      </div>
    </div>
  ));

  return (
    <div>
      <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span onClick={props.newNote} className="badge text-bg-info">
              +
            </span>
          </a>
        </div>
      </nav>
      <section classNameName="pane sidebar sticky">
        <div>{noteElements}</div>
      </section>
    </div>
  );
}
