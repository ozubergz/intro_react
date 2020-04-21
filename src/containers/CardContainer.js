import React, { Component } from 'react';
import Card from '../components/Card';

// class component aka stateful component
class CharacterContainer extends Component {
    
    // initialize default state with empty array
    // this state assigned with an object
    state = {
        characters: []
    }
    
    componentDidMount() {
        //This is where we fetch our external data
        fetch("http://localhost:3000/characters")
        .then(res => res.json())
        .then(data => {
            // This is where we set the state
            // setting state re-renders the component
            // the word 'this' refers to the class component itself
            this.setState({characters: data})
        });
    }
    
    // all class components must have render() method
    // render() method is required and will always be called 
    // render() method must always have a return
    render() {
        return (
            <div className="body-content">

                {/* this is where we map our data, iterating through the array */}
                {/* map function always need to be returned */}
                {/* map is always mutable, meaning you can data inside an array */}

                <div className="card-container">
                    {this.state.characters.map(character => {
                        // console.log(character)
                        // pass character to card as props
                        // list of elements require a key prop assigned to an id
                        return <Card key={character.id} character={character} />
                    })}
                </div>
                
            </div>
        )
    }
}

export default CharacterContainer;