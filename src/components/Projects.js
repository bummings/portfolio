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
        {/* !!! */}
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
        {/* !!! */}
        <div className='projects__project'>
          <div className='projects__project--two'>
            <h2 className='projects__project--header'>Edd Notes</h2>
            <h3 className='projects__project--sub'>October 2018</h3>

            <p className='projects__project--description'>
              A fundamental note-taking web application that helped me
              understand the finer details of lacing a React front end to a
              RESTful API built from scratch.
            </p>
            <p className='projects__project--description'>
              The front end was built in React and a combination of Sass and
              Styled Components on the front end, NodeJS and Hapi.js on the
              backend, connected to a SQLite3 database. It was deployed to
              Netlify and Heroku using TravisCI for continuous integration.
            </p>
          </div>
          <div className='projects__project--one'>
            <img src={eddnotes} alt='' className='projects__project--img' />
          </div>
        </div>
        {/* !!! */}
        <div className='projects__project'>
          <div className='projects__project--one'>
            <img src={moveBytes} alt='' className='projects__project--img' />
          </div>
          <div className='projects__project--two'>
            <h2 className='projects__project--header'>MoveBytes</h2>
            <h3 className='projects__project--sub'>February 2019</h3>

            <p className='projects__project--description'>
              MoveBytes is a file sharing service that allows users to upload
              and share files up to 5GB with anyone. Links are shared with a
              generated magic link that's e-mailed to a recipient, via the
              SendGrid API.
            </p>
            <p className='projects__project--description'>
              Users can purchase a paid account to host files for longer than 7
              days and to be notified when the file has been successfully
              downloaded by the recipient.
            </p>
            <p className='projects__project--description'>
              This project was built with React and Styled Components on the
              front end, NodeJS and Express.js on the backend, PostgreSQL for
              the database and was deployed to AWS S3.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;