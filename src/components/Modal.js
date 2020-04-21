import React, { Component } from 'react';

class Modal extends Component {
    render() {

        const { character } = this.props;

        return (
            <div className="modal">
                <div className="modal-body">
                    <img 
                        src={character.image} 
                        alt={character.name} 
                        className="modal-image"
                        height="650"
                    />
                    <div className="modal-table">
                        <h1>{character.name}</h1>
                        <h3>{character.japanese}</h3>
                        <div className="table">
                            <div className="columns col-1">
                                <span>Age: </span>
                                <span>Birthday: </span>
                                <span>Occupation: </span>
                            </div>
                            <div className="columns col-2">
                                <span>{character.age}</span>
                                <span>{character.birthday}</span>
                                <span>{character.occupation}</span>
                            </div>
                        </div>
                        <div className="summary">
                            <h4>Summary:</h4>
                            <p>{character.summary}</p>
                        </div>
                    </div>
                    
                    <button onClick={this.props.handleCloseClick}>
                        <h2>CLOSE</h2>
                    </button>
                </div>

            </div>
        );
    }
}

export default Modal;