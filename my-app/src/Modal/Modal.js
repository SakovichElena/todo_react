import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className="openModalButton" onClick={() => this.setState({ isOpen: true })}>
                    Open modal
                </button>

                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                        <h1 className="modal-title">Hi!</h1>
                        <p className="modal-text">Let's complete all tasks from the list</p>
                        <button className="closeModalButton" onClick={() => this.setState({ isOpen: false })}>Close modal</button>
                    </div>
                </div>
                )}
            </React.Fragment>
        )
    }
}