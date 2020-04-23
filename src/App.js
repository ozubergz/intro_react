import React, { Component } from 'react';
import './App.css';
import TopBanner from './components/TopBanner';
import CardContainer from './containers/CardContainer';
import Modal from './components/Modal';

// Main App Component
// functional component is also known as stateless component
// functional component does not require a render() method
class App extends Component {

    state={
      character: "",
      showModal: false
    }
    
    handleClick = (character) => {
      this.setState({ 
        character: character,
        showModal: true
      });
    }

    handleCloseClick = () => {
      this.setState({
        showModal: false
      });
    }


    render() {    
      return (
        <div className="App">
        <TopBanner />
        <CardContainer
          // pass handleClick as props to a child
          handleClick={this.handleClick}
        />
        { this.state.showModal ? <Modal handleCloseClick={this.handleCloseClick} character={this.state.character} /> : null }
      </div>
    );
  }

}

export default App;
