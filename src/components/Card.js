import React, { Component } from 'react';

class Card extends Component {
    
    render() {

        // this is deconstructing, getting property from props 
        // same thing as this.prop.character, but shorter
        const { character } = this.props;
        // console.log(character);

        return(
            <div className="card">
                <div 
                    className="card-image" 
                    //inline styling, set character images
                    style={{ 
                        backgroundImage: `url(${character.image})` 
                }}></div>
            </div>
        )
    }
}

export default Card;