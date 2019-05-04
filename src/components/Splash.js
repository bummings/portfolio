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
          <div className='landing__code'>
            <span className='lineNumber'>01</span>
            <span className='reserved'>import </span>
            <span className='variable'>
              React, <span className='bracket'>{leftCurly}</span> Component
              <span className='bracket'> {rightCurly}</span>
            </span>
            <span className='reserved'> from </span>
            <span className='definition'> 'react'</span>
            <span className='text'>;</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>02</span>
            <span className='keyword'>const </span>
            <span className='variable'>name </span>
            <span className='equal'>= </span>
            <span className='definition'> 'Edd Burke'</span>
            <span className='text'>;</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>03</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>04</span>
            <span className='keyword'>class </span>
            <span className='variable'>Intro </span>
            <span className='keyword'>extends </span>
            <span className='variable'>Component </span>
            <span className='bracket'>{leftCurly}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>05 &nbsp;</span>
            <span className='render'>render</span>
            <span className='variable'>() </span>
            <span className='bracket'>{leftCurly}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>06 &nbsp;&nbsp;</span>
            <span className='reserved'> return </span>
            <span className='variable'>( </span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>
              07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className='bracket'>{leftBracket}</span>
            <span className='element'>div </span>
            <span className='keyword'>className</span>
            <span className='text'>=</span>
            <span className='definition'>'intro'</span>
            <span className='bracket'>{rightBracket}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>
              08 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className='bracket'>{leftBracket}</span>
            <span className='element'>h1 </span>
            <span className='keyword'>className</span>
            <span className='text'>=</span>
            <span className='definition'>'intro__header'</span>
            <span className='bracket'>{rightBracket}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>
              09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className='text'>Hi! I'm </span>
            <span className='bracket'>{leftCurly}</span>
            <span className='variable'> name </span>
            <span className='bracket'>{rightCurly}</span>
            <span className='variable'>.</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>
              10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className='bracket'>{leftBracketEnd}</span>
            <span className='element'>h1</span>
            <span className='bracket'>{rightBracket}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>
              11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className='bracket'>{leftBracket}/</span>
            <span className='element'>div</span>
            <span className='bracket'>{rightBracket}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>12 &nbsp;&nbsp;&nbsp;</span>
            <span className='variable'>); </span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>13 &nbsp;</span>
            <span className='bracket'>{rightCurly}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>14</span>
            <span className='bracket'>{rightCurly}</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>15</span>
          </div>

          <div className='landing__code'>
            <span className='lineNumber'>16</span>
            <span className='reserved'>export default </span>
            <span className='variable'>Intro</span>
            <span className='bracket'>;</span>
          </div>
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
