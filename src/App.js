import './App.css';


import React from 'react';
import ReactDOM from 'react-dom';

import Info from './pages/Info';
import Place from './pages/Place';
import Crew from './pages/Crew';


function App() {
  return (
    <div className="App">
      <Info/>
      
      <br/>

      <Place/>

      <br/>

      <Crew/>
    </div>
  );
}

export default App;
