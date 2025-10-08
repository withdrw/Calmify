import React from 'react';
import './App.css'; // If you have an App.css, you can keep it, but we are also using main.css
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      {/* ... other components ... */}
    </div>
  );
}

export default App;