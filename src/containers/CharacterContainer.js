import React, { Component } from 'react';

// class component aka stateful component
class CharacterContainer extends Component {
    
    //initialize default state with empty array
    state = {
        characters: []
    }
    
    
    componentDidMount() {
        //This is where we fetch our external data
        fetch("http://localhost:3000/characters")
        .then(res => res.json())
        .then(data => {
            // This is where we set state
            //setting state re-renders the component
            this.setState({characters: data})
        });
    }
    
    // all class components must have render() method
    // render() method is required and will always be called 
    // render() method must always have a return
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default CharacterContainer;