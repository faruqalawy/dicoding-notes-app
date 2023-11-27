import React from "react";
import NoteItem from "./7-NoteItem";


function NoteListArchive({ archivedNotes, onUnarchive, onDelete }) {
    return (
        <>
            {archivedNotes.length > 0 ? (
                <div className="notes-list">
                    {archivedNotes.map((note) => (
                        <NoteItem key={note.id} onUnarchive={onUnarchive} onDelete={onDelete} {...note} />
                    ))}
                </div>
            ) : (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
        </>
    );
}

export default NoteListArchive;