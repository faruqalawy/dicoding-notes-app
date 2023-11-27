import React from "react";
import DeleteButton from "./9-DeleteButton";
import ArchiveButton from "./10-ArchiveButton";

function ActionButton(id, onDelete, onArchive, onUnarchive, archived) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton 
                id={id} 
                onArchive={onArchive} 
                onUnarchive={onUnarchive}
                archived={archived}
            />
        </div>
    )
}

export default ActionButton;