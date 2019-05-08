import React, { Component } from 'react';

import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact__header'>
          <p
            className='contact__header--text'
            data-aos='zoom-in'
            data-aos-easing='ease-in-out'
            data-aos-duration='1000'
          >
            Get in touch
          </p>
          <p className='contact__header--invitation'>
            Let's build something together- I'd love to work with you.
          </p>
        </div>

        {/* BLOCK */}

        <div className='contact__form'>
          <div className='contact__form--form'>
            <form name='contact' method='POST' data-netlify='true'>
              <div className='contact__form--section'>
                <label class='contact__form--label'>Name</label>
                <br />
                <input class='contact__form--input' type='text' name='name' />
              </div>
              <div className='contact__form--section'>
                <label class='contact__form--label'>E-mail</label>
                <br />
                <input class='contact__form--input' type='email' name='email' />
              </div>
              <div className='contact__form--section'>
                <label class='contact__form--label'>Message</label>
                <br />
                <textarea class='contact__form--textBox' name='message' />
              </div>
              <div className='contact__form--section'>
                <button class='contact__form--btn' type='submit'>
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className='contact__form--details'>
            <div class='contact__details--detail'>
              <img class='contact__details--icon' src={email} alt='email' />
              <p class='contact__details--text'>hello@bummings.io</p>
            </div>

            <div class='contact__details--detail'>
              <img class='contact__details--icon' src={phone} alt='telephone' />
              <p class='contact__details--text'>(215) 971-7458</p>
            </div>

            <div class='contact__details--detail'>
              <img class='contact__details--icon' src={github} alt='github' />
              <p class='contact__details--text'>/bummings</p>
            </div>

            <div class='contact__details--detail'>
              <img
                class='contact__details--icon'
                src={linkedin}
                alt='linkedin'
              />
              <p class='contact__details--text'>/edd.burke</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
