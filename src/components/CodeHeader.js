import React, { Component } from 'react';

class CodeHeader extends Component {
  render() {
    return (
      <div className='landing'>
        <code>const name = 'edd burke';</code>
        <pre>{`<Intro>Hi! I'm {name}.</Intro>`}</pre>
      </div>
    );
  }
}

export default CodeHeader;
