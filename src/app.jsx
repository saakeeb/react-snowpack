import React, { useState, useEffect } from 'react';
import logo from './asset/moon.png';
import './app.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;
