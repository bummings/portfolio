import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact__header'>
          <p
            class='contact__header--text'
            data-aos='zoom-in'
            data-aos-easing='ease-in-out'
            data-aos-duration='1000'
          >
            Let's talk
          </p>
        </div>
        <div
          className='contact__form'
          data-aos='flip-right'
          data-aos-duration='1200'
          data-aos-offset='300'
        >
          <form name='contact' method='POST' data-netlify='true'>
            <label class='contact__form--label'>Name</label>
            <br />
            <input class='contact__form--input' type='text' name='name' />
            <label class='contact__form--label'>Message</label>
            <br />
            <textarea class='contact__form--textBox' name='message' />

            <button class='contact__form--btn' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
