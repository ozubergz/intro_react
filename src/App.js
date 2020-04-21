import React from 'react';
import './App.css';
import TopBanner from './components/TopBanner';
import CardContainer from './containers/CardContainer';
import Modal from './components/Modal';

// Main App Component
// functional component is also known as stateless component
// functional component does not require a render() method
function App() {

  return (
    <div className="App">
      <TopBanner />
      <CardContainer />
      <Modal />
    </div>
  );
}

export default App;
