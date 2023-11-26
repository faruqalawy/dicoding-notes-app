import React from "react";
import { getInitialData } from "../utils/index";
import NoteInput from "./4-NoteInput";
import NoteListActive from "./5-NoteListActive";
import NoteListArchieve from "./6-NoteListArchive";

class NoteBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
    

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="note-app__body">
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteListActive notes={this.state.notes} onDelete={this.onDeleteHandler} />
                <h2>Arsip</h2>
                <p className="note-list__empty-message">Tidak ada catatan</p>
            </div>
        )
    }
}

export default NoteBody;