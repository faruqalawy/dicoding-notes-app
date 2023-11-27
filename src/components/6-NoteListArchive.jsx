import React from "react";
import NoteItem from "./7-NoteItem";


function NoteListArchive({ archivedNotes, onUnarchive, onDelete }) {
    return (
        <div className="notes-list">
            {archivedNotes.length > 0 ? (
            archivedNotes.map((note) => (
                <NoteItem key={note.id} onUnarchive={onUnarchive} onDelete={onDelete} {...note} />
            ))
            ) : (
                <p className="note-list__empty-message">Tidak ada catatan</p>
            )}
        </div>
    );
}

export default NoteListArchive;