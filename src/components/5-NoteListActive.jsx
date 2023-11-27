import React from "react";
import NoteItem from "./7-NoteItem"

function NoteListActive({ notes, onDelete, onArchive }) {
    const activeNotes = notes.filter((note) => !note.archived);
    return (
        <div className="notes-list">
            {activeNotes.map((note) => (
            <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
            />
            ))}
        </div>
    );
}

export default NoteListActive