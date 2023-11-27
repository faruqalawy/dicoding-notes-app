import React from "react";

function ArchiveButton({ id, onArchive, onUnarchive, archived }) {
    return (
        <button
            className="note-item__archive-button"
            onClick={() => (archived ? onUnarchive(id) : onArchive(id))}
        >
            {archived ? "Pindahkan" : "Arsipkan"}
        </button>
    );
}

export default ArchiveButton