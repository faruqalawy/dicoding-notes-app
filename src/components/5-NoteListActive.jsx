import React from "react";
import NoteItem from "./7-NoteItem"

function NoteListActive({id, notes, onDelete, onArchieve}) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={id}
                        onArchieve={onArchieve}
                        onDelete={onDelete}
                    {...note} />
                ))
            }
        </div>
    );
}

export default NoteListActive