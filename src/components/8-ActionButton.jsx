import React from "react";
import DeleteButton from "./9-DeleteButton";
import ArchiveButton from "./10-ArchiveButton";
import UnarchiveButton from "./12-UnArchiveButton";

function ActionButton({ id, onDelete, onArchive, onUnarchive, archived }) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            {archived ? (
                <UnarchiveButton id={id} onUnarchive={onUnarchive} />
            ) : (
                <ArchiveButton id={id} onArchive={onArchive} onUnarchive={onUnarchive} archived={archived} />
            )}
        </div>
    );
}

export default ActionButton;