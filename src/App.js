import React, { Component } from 'react';
import CodeHeader from './components/CodeHeader';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='landing'>
          <h1 className='landing__header'>Install SASS structure</h1>
          <CodeHeader />
        </div>
      </div>
    );
  }
}

export default App;
