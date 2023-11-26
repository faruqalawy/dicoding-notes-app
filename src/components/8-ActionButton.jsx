import React from "react";
import DeleteButton from "./9-DeleteButton";
import ArchieveButton from "./10-ArchiveButton";

function ActionButton(id, onDelete, onArchieve) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchieveButton id={id} onArchieve={onArchieve} />
        </div>
    )
}

export default ActionButton;