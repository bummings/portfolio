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
          <span className='contact__header--invitation'>
            Let's build something together- I'd love to work with you.
          </span>
        </div>

        <div className='contact__split'>
          {/* F O R M */}
          <div className='contact__split--form'>
            <div className='form'>
              <form name='contact' method='POST' data-netlify='true'>
                <div className='form__section'>
                  <label class='form__label'>Name</label>
                  <br />
                  <input class='form__input' type='text' name='name' />
                </div>

                <div className='form__section'>
                  <label class='form__label'>E-mail</label>
                  <br />
                  <input class='form__input' type='text' name='email' />
                </div>

                <div className='form__section'>
                  <label class='form__label'>Message</label>
                  <br />
                  <textarea class='form__textBox' name='message' />
                </div>

                <div className='form__section'>
                  <button class='form__btn' type='submit'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* D E T A I L S */}
          <div className='contact__split--details'>
            <div className='details'>
              <div class='details__detail'>
                <img class='details__detail--icon' src={email} alt='email' />
                <p class='details__detail--text'>hello@bummings.io</p>
              </div>

              <div class='details__detail'>
                <img
                  class='details__detail--icon'
                  src={phone}
                  alt='telephone'
                />
                <p class='details__detail--text'>(215) 971-7458</p>
              </div>

              <div class='details__detail'>
                <img class='details__detail--icon' src={github} alt='github' />
                <p class='details__detail--text'>/bummings</p>
              </div>

              <div class='details__detail'>
                <img
                  class='details__detail--icon'
                  src={linkedin}
                  alt='linkedin'
                />
                <p class='details__detail--text'>/edd.burke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
