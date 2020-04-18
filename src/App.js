import React from 'react';
import './App.css';

//must import HelloWorld from component folder
import HelloWorld from './components/HelloWorld';

//App is a functional component aka stateless component
//All components must return something
function App() {
  return (
    <div className="App">
      
      <HelloWorld />
    </div>
  );
}

export default App;
