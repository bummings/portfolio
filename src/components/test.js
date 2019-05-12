import React, { Component } from 'react';
const name = 'Edd Burke';

class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <div className='intro__header'>Hi! I'm {name}.</div>
      </div>
    );
  }
}

export default Intro;
