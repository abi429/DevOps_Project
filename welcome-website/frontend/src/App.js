import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/welcome');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to server');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <button className="welcomeButton" onClick={handleClick}>
          Click Me!
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
