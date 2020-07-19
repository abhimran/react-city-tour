import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar'
import Tourlist from './components/Tourlist'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Tourlist />
    </React.Fragment>
  );
}

export default App;
