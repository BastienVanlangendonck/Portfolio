// == Import npm
import React from 'react';

// == Import
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Projects from 'src/components/Projects';
import About from 'src/components/About';
import Skills from 'src/components/Skills';
import Footer from 'src/components/Footer';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <Projects />
    <About />
    <Skills />
    <Footer />
  </div>
);

// == Export
export default App;
