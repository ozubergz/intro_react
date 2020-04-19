import React, { Component } from 'react';

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
            <div>
                {/* this is where we map our data, iterating them */}
                {this.state.characters.map(char => {
                    console.log(char)
                })}
            </div>
        )
    }
}

export default CharacterContainer;