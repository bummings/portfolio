import React, { Component } from 'react';

let leftBracket = '<';
let rightBracket = '>';
let leftBracketEnd = '</';
let leftCurly = '{';
let rightCurly = '}';

class Splash extends Component {
  render() {
    return (
      <div className='splash'>
        <div className='one'>
          <h1 className='landing__code'>
            <span className='lineNumber'>01</span>
            <span className='keyword'>const </span>
            <span className='variable'>name </span>
            <span className='equal'>= </span>
            <span className='definition'> 'Edd Burke'</span>
            <span className='text'>;</span>
          </h1>
          <h1 className='landing__code'>
            <span className='lineNumber'>02</span>
            <span className='bracket'>{leftBracket}</span>
            <span className='element'>intro</span>
            <span className='bracket'>{rightBracket}</span>
            <span className='text'>Hi! I'm </span>
            <span className='bracket'>{leftCurly}</span>
            <span className='variable'>name</span>
            <span className='bracket'>{rightCurly}</span>
            <span className='text'>.</span>
            <span className='bracket'>{leftBracketEnd}</span>
            <span className='element'>intro</span>
            <span className='bracket'>{rightBracket}</span>
          </h1>
        </div>
        <div className='two'>
          <div className='hi'>
            <h1 className='hi__header'>Hi! I'm Edd Burke.</h1>
            <p className='hi__paragraph'>
              I am a profoundly-driven programmer, developer, designer, hacker
              and- above all- learner.{' '}
            </p>
            <p className='hi__paragraph'>
              Software and technology has been the consistent source of
              inspiration of my life: learning to solve my own personal
              quagmires and working with the greatest community of fellow
              futurists- all the while learning with great pleasure every
              functional, modular development and design pattern I can sink my
              teeth into.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
