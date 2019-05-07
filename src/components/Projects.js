import React, { Component } from 'react';

import bonafind from '../assets/bonafind.jpg';
import moveBytes from '../assets/movebytes.jpg';
import eddnotes from '../assets/eddnotes.jpg';
import steap from '../assets/steap.jpg';
import sjarc from '../assets/sjarc.jpg';
// import zephyr from '../assets/zephyr.jpg';
import xchange from '../assets/xchange.jpg';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1 className='projects--headline'>Projects</h1>
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
            <h2 className='projects__project--header'>Edd's Notes</h2>
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
              the database and was deployed to AWS S3. Auth0 is used for
              authentication.
            </p>
          </div>
        </div>

        {/* !!! */}
        <div className='projects__project'>
          <div className='projects__project--two'>
            <h2 className='projects__project--header'>Steap & Grind</h2>
            <h3 className='projects__project--sub'>February 2018</h3>

            <p className='projects__project--description'>
              A local restaurant website taken on as a freelance project. This
              site allowed me to explore and experiment with everything I had
              been learning about CSS Grid at the time, as well as exploring
              more complicated media queries, in lieu of container queries (some
              day!)
            </p>
            <p className='projects__project--description'>
              This website was built using standard (and semantic) HTML5 with
              Sass, using GulpJS for task managements such as compiling Sass,
              compressing images, spinning up a development server and uglifying
              the JS. There is a bit of jQuery spinkled in as well so as to add
              in some mild animations. This project pre-dated Google Maps' cap
              warning on overcharges and I woke up to a $500 dollar charge to my
              credit card for Maps overages, via an API key left out in the open
              on a public Github repo. Learned a wonderful lesson with that!
            </p>
          </div>
          <div className='projects__project--one'>
            <img src={steap} alt='' className='projects__project--img' />
          </div>
        </div>

        {/* !!! */}
        <div className='projects__project'>
          <div className='projects__project--one'>
            <img src={sjarc} alt='' className='projects__project--img' />
          </div>
          <div className='projects__project--two'>
            <h2 className='projects__project--header'>S&J Architects</h2>
            <h3 className='projects__project--sub'>September 2018</h3>

            <p className='projects__project--description'>
              A fully responsive design for a fictional architecture firm
              composed with HTML5, CSS3 with LESS preprocessing and vanilla
              Javascript. This was my first front end project for the Lambda
              School curriculum.
            </p>
            <p className='projects__project--description'>
              This project allowed me to experiment with the differences between
              LESS from Sass and understand modals in raw Javascript, as opposed
              to using a library or jQuery add-on.
            </p>
          </div>
        </div>

        {/* !!! */}
        <div className='projects__project'>
          <div className='projects__project--two'>
            <h2 className='projects__project--header'>xchangewax</h2>
            <h3 className='projects__project--sub'>December 2017</h3>

            <p className='projects__project--description'>
              This was my first deep-dive into NodeJS. xchangewax was a concept
              I came up with for documenting record stores in Philadelphia,
              catered to local crate-diggers and record collectors alike. The
              dataset is very simple and raw but this was a sea change for me,
              coming from the world of static development and experiencing
              client-side rendering, a remote database as well as using EJS
              (embedded javascript) for the first time, setting the foundation
              for how I would interact with JSX later on in React. This was also
              the first time I used NPM for managing different dependencies and
              libraries.
            </p>
            <p className='projects__project--description'>
              This project was put together in a day as a entry for an
              internship with a local development shop. It's using simple HTML5
              and CSS3, enveloped in EJS on the front end and NodeJS with
              Express on the backend, using a MongoDB databse, hosted remotely
              on MLab.
            </p>
            <p className='projects__project--description'>
              xchangewax never got very far and I never got a call back about
              the internship but it's a very special project to me because it
              changed everything for me about how I imagined what functional web
              technology could be and I never looked back- that is, until I was
              putting together this portfolio.
            </p>
          </div>
          <div className='projects__project--one'>
            <img src={xchange} alt='' className='projects__project--img' />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
