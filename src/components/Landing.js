import React, { Component } from 'react';

let leftBracket = '<';
let rightBracket = '>';
let leftBracketEnd = '</';
let leftCurly = '{';
let rightCurly = '}';

class CodeHeader extends Component {
  render() {
    return (
      <div className='landing'>
        <h1 className='landing__code'>
          <span className='keyword'>const</span>{' '}
          <span className='variable'>name </span>
          <span className='equal'>= </span>
          <span className='definition'> 'edd burke'</span>
          <span className='text'>;</span>
        </h1>
        <h1 className='landing__code'>
          <span className='bracket'>{leftBracket}</span>
          <span className='element'>intro</span>
          <span className='bracket'>{rightBracket}</span>
          <span className='text'>Hello! My name is </span>
          <span className='bracket'>{leftCurly}</span>
          <span className='variable'>name</span>
          <span className='bracket'>{rightCurly}</span>
          <span className='bracket'>{leftBracketEnd}</span>
          <span className='element'>intro</span>
          <span className='bracket'>{rightBracket}</span>
        </h1>
      </div>
    );
  }
}

export default CodeHeader;
