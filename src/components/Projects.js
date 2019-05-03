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
            <h3 className='projects__project--sub'>December 2018</h3>

            <p className='projects__project--description'>
              Bonafind is a web application that helps you discover restaurants
              and businesses near you. Users can leave personalized reviews,
              find hours, photos and contact information related to the
              businesses. A user can upgrade their account for access to premium
              features such as leaving more than 3 reviews at a time.
            </p>
            <p className='projects__project--description'>
              This application was developed in React for the front end, NodeJS
              and Express on the backend and PostgresQL for the database. It
              features OAuth for authentication and Stripe integration for
              premium functionality. The frontend is deployed to Netlify and the
              backend is deployed to Heroku, wired with TravisCI for continuous
              integration. This application also utilized the Google Places API
              for business data scraping.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
