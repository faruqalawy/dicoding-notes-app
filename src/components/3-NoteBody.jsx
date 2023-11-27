import React from "react";
import { getInitialData } from "../utils/index";
import NoteInput from "./4-NoteInput";
import NoteListActive from "./5-NoteListActive";
import NoteListArchive from "./6-NoteListArchive";

class NoteBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            archivedNotes: [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
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
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) {
        this.setState((prevState) => {
            const updatedNotes = prevState.notes.filter((note) => note.id !== id);
            const updatedArchivedNotes = prevState.archivedNotes.filter((note) => note.id !== id);
    
            return {
                notes: updatedNotes,
                archivedNotes: updatedArchivedNotes,
            };
        });
    }

    onArchiveHandler(id) {
        this.setState((prevState) => {
            const archivedNote = prevState.notes.find((note) => note.id === id);
        
            if (archivedNote && !archivedNote.archived) {
                return {
                notes: prevState.notes.filter((note) => note.id !== id),
                archivedNotes: [...prevState.archivedNotes, { ...archivedNote, archived: true }],
                };
            }
        
            return prevState; 
        });
    }
    
    onUnarchiveHandler(id) {
        this.setState((prevState) => {
            const updatedArchivedNotes = prevState.archivedNotes.filter(
                (note) => note.id !== id
            );
            const unarchivedNote = prevState.archivedNotes.find(
                (note) => note.id === id
            );
            return {
                notes: [...prevState.notes, { ...unarchivedNote, archived: false }],
                archivedNotes: updatedArchivedNotes,
            };
        });
    }

    render() {
        return (
            <div className="note-app__body">
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Catatan Aktif</h2>
                <NoteListActive
                    notes={this.state.notes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <h2>Arsip</h2>
                <NoteListArchive
                    archivedNotes={this.state.archivedNotes}
                    onDelete={this.onDeleteHandler}
                    onUnarchive={this.onUnarchiveHandler}
                />
            </div>
            );
        }
    }

export default NoteBody;