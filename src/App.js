import React, { Component } from 'react';
import Splash from './components/Splash';
import CodeHeader from './components/Landing';
import Hi from './components/Hi';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Splash />
        {/* <CodeHeader /> */}
        <Hi />
        <Projects />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
