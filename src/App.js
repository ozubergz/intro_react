import React from 'react';
import './App.css';
import TopBanner from './components/TopBanner';
import CharacterContainer from './containers/CharacterContainer';

// Main App Component
// functional component is also known as stateless component
// functional component does not require a render() method
function App() {
  return (
    <div className="App">
      <TopBanner />
      <CharacterContainer />
    </div>
  );
}

export default App;
