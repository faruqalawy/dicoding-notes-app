import React from "react";
import ActionButton from "./8-ActionButton";

function NoteItem({id, title, body, createdAt, onDelete, onArchieve}) {
    return (
        <div className="note-item">
            <h1 className="note-item__title" title={title} />
            <p className="note-item__date" createdAt={createdAt} />
            <p className="note-item__content" body={body} />
            <ActionButton id={id} onArchieve={onArchieve} onDelete={onDelete} />
        </div>
    )
}

export default NoteItem;