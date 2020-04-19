import React from 'react';
import './App.css';
import TopBanner from './components/TopBanner';
import CharacterContainer from './containers/CharacterContainer';

// Main App Component
// functional component aka stateless component
function App() {
  return (
    <div className="App">
      <TopBanner />
      <CharacterContainer />
    </div>
  );
}

export default App;
