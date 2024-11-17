import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(prevValue => (prevValue < 20 ? prevValue + 1 : prevValue));
  };

  const handleRemove = () => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : prevValue));
  };

  return (
    <div className="app-container">
      <h1>Current Value: {value}</h1>
      <div className="button-container">
        <button className="button add" onClick={handleAdd}>Add</button>
        <button className="button remove" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default App;
