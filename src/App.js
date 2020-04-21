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
      showModal: false
    }
    
    handleClick = (character) => {
      console.log(character)
      this.setState({ showModal: true })
    }


    render() {    
      return (
        <div className="App">
        <TopBanner />
        <CardContainer
          // pass handleClick as props to a child
          handleClick={this.handleClick}
        />

        { this.state.showModal ? <Modal /> : null }
      </div>
    );
  }

}

export default App;
