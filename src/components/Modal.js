import React, { Component } from 'react';

class Modal extends Component {
    render() {

        const { character } = this.props;

        return (
            <div className="modal">
                <div className="character-modal">
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name} height="650"/>
                </div>

            </div>
        );
    }
}

export default Modal;