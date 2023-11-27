import React from "react";
import NoteItem from "./7-NoteItem"

function NoteListActive({ notes, onDelete, onArchive }) {
    const activeNotes = notes.filter((note) => !note.archived);
    return (
        <>
            {activeNotes.length > 0 ? (
                    <div className="notes-list">
                        {activeNotes.map((note) => (
                        <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note}
                    /> ))}
                    </div>
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </>
    );
}

export default NoteListActive