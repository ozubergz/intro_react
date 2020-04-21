import React, { Component } from 'react';

class Card extends Component {
    
    render() {

        // this is deconstruction, getting property from props (an object)
        // same thing as this.prop.character, but shorter
        const { character } = this.props;
        // console.log(character);

        return(
            <div className="card">
                <div 
                    className="card-image"
                    onClick={() => this.props.handleClick(character)}

                    //inline styling, set character images to backgroundImage
                    style={{ 
                        backgroundImage: `url(${character.image})` 
                }}>
                </div>
            </div>
        )
    }
}

export default Card;