import React, { Component } from 'react';
import CodeHeader from './components/CodeHeader';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='landing'>
          <CodeHeader />
        </div>
      </div>
    );
  }
}

export default App;
