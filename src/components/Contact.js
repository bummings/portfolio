import React, { Component } from 'react';

import email from '../assets/email.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact__header'>
          <p
            className='contact__header--text'
          >
            Let's talk!
          </p>
        </div>

        
          

          {/* D E T A I L S */}
            <div className='details'>              
              <div className='details--detail'>
              <a href="mailto:hello@bummings.io">
                <img
                  className='details--detail__icon'
                  src={email}
                  alt='email'
                />
              </a>
                <span className='details--detail__text'>hello@bummings.io</span>
              </div>
              
              <div className='details--detail'>
                <img
                  className='details--detail__icon'
                  src={github}
                  alt='github'
                />
                <a
                  href='http://github.com/bummings'
                  target='_none'
                  className='details--detail__text'
                >
                  /bummings
                </a>
              </div>

              <div className='details--detail'>
                <img
                  className='details--detail__icon'
                  src={linkedin}
                  alt='linkedin'
                />
                <a
                  href='http://linkedin.com/in/eddburke'
                  target='_none'
                  className='details--detail__text'
                >
                  /in/eddburke/
                </a>
              </div>     
          </div>
        </div>
    );
  }
}

export default Contact;
