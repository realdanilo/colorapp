import React from 'react';
import Palette from './Palette'
import seedColors from './seedColors'
import './App.css'
import { generatePalette } from './colorHelper'
function App() {
  return (
    <div className="App">
      <Palette {...seedColors[1]} />
    </div>
  );
}

export default App;
