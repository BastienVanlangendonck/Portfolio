// == Import npm
import React from 'react';

// == Import
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
  </div>
);

// == Export
export default App;
