// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Projects from 'src/components/Projects';
import About from 'src/components/About';
import Skills from 'src/containers/Skills';
import Footer from 'src/components/Footer';
import './styles.css';

// == Composant
const App = ({
  setProgressionsBar,
  skillOffset,
  setWindowOffset,
}) => {
  const handleScroll = () => {
    /* console.log(window.pageYOffset); */
    if (window.pageYOffset > 500) {
      if (!skillOffset) {
        /* console.log('composant true'); */
        setWindowOffset(true);
      }
    }
    else if (window.pageYOffset < 500) {
      if (skillOffset) {
        /* console.log('composant false'); */
        setWindowOffset(false);
      }
    }
  };

  useEffect(() => {
    setProgressionsBar();
  }, [skillOffset]);

  window.addEventListener('scroll', handleScroll);
  return (
    <div className="app">
      <Header />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};

App.propTypes = {
  setProgressionsBar: PropTypes.func.isRequired,
  skillOffset: PropTypes.bool.isRequired,
  setWindowOffset: PropTypes.func.isRequired,
};
// == Export
export default App;
