import React, { Component } from 'react';
import Splash from './components/Splash';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Splash />
        {/* <CodeHeader /> */}
        {/* <Hi /> */}
        <Contact />
        <Projects />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
