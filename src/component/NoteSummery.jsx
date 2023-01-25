import React from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

export default function NoteSummery(props) {
  const today = new Date();
  const noteElements = props.notes.map((note) => (
    <div className="toast-box" key={note.div}>
      <Toast onClick={() => props.setCurrentNoteId(note.id)}>
        <div class="toast-header">
          <strong className="me-auto">{note.body.split("\n")[0]}</strong>
          <small>
            {today.getMonth() + 1}/{today.getDay()}/{today.getFullYear()}
          </small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={(event) => props.deleteNote(event, note.id)}
          ></button>
        </div>
        <Toast.Body>{note.body.split("\n")[1]}</Toast.Body>
      </Toast>
    </div>
  ));

  return (
    <div className="container-sm">
      <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <div className="headerTitle">ToDo</div>
          <a className="navbar-brand">
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

/*<div
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
      */
