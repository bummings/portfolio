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
          <div className='projects__project--one'>
            <img src={bonafind} alt='' className='projects__project--img' />
          </div>
          <div className='projects__project--two'>
            <h2 className='projects__project--header'>Bonafind</h2>
            <p className='projects__project--description'>
              Bonafind is a web application that helps you discover restaurants
              and businesses near you. Users can leave personalized reviews,
              find hours, photos and contact information related to the
              businesses.
            </p>
            <p className='projects__project--description'>
              This application was developed in React and NodeJS and PostgresQL
              backend, utilizing the Google Places API.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
