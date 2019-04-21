import React, { Component } from 'react';
import CodeHeader from './components/CodeHeader';
import Hi from './components/Hi';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='landing'>
          <CodeHeader />
          <Hi />
        </div>
      </div>
    );
  }
}

export default App;
