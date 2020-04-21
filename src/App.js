import React from 'react';
import './App.css';
import TopBanner from './components/TopBanner';
import CardContainer from './containers/CardContainer'

// Main App Component
// functional component is also known as stateless component
// functional component does not require a render() method
function App() {
  return (
    <div className="App">
      <TopBanner />
      <CardContainer />
    </div>
  );
}

export default App;
