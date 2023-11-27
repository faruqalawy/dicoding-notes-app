import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            remainingChars: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onTitleMaxCharEventHandler = this.onTitleMaxCharEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;

        if (title.length <= 50) {
            const remainingChars = 50 - title.length;

            this.setState({
                title,
                remainingChars,
            });

            if (title.length === 50) {
                this.onTitleMaxCharEventHandler(title);
            }
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    onTitleMaxCharEventHandler(title) {
        alert("Title mencapai 50 karakter:");
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        Sisa Karakter: {this.state.remainingChars}
                    </p>
                    <input 
                        type="text" 
                        className="note-input__title" 
                        placeholder="Isi judul disini..." 
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        required
                    />
                    <textarea 
                        type="text" 
                        className="note-input__body" 
                        placeholder="Tuliskan catatanmu disini..." 
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        required
                    ></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;
