import React from "react";
import ActionButton from "./8-ActionButton";
import { showFormattedDate } from "../utils";

function NoteItem({
    id,
    title,
    body,
    createdAt,
    onDelete,
    onArchive,
    onUnarchive,
    archived,
}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <ActionButton
                id={id}
                onDelete={onDelete}
                onArchive={onArchive}
                onUnarchive={onUnarchive}
                archived={archived}
            />
        </div>
    );
}

export default NoteItem;