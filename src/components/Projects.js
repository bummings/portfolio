import React, { Component } from 'react';

import bonafind from '../assets/bonafind.jpg';
import moveBytes from '../assets/movebytes.jpg';
import eddnotes from '../assets/eddnotes.jpg';
import steap from '../assets/steap.jpg';
import sjarc from '../assets/sjarc.jpg';
import zephyr from '../assets/zephyr.jpg';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1 className='projects__header'>Projects</h1>
        <div className='projects__project'>
          <img src={bonafind} alt='' className='projects__project--img' />
          <h2 className='projects__project--header'>Bonafind</h2>
        </div>
      </div>
    );
  }
}

export default Projects;
