import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className='contact__form'>
          <form name='contact' netlify>
            <p>
              <label>
                Name <input type='text' name='name' />
              </label>
            </p>
            <p>
              <label>
                Email <input type='email' name='email' />
              </label>
            </p>
            <p>
              <button type='submit'>Send</button>
            </p>
          </form>
        </div>
      </div>
      //       <div class="contact">
      //             <div class="contact__header">
      //               <p class='contact__header--text' data-aos="zoom-in"  data-aos-easing="ease-in-out" data-aos-duration="1000">Let's talk</p>
      //               <p class="contact__header--subtext">
      //                   So let’s do this! If you like what you hear and you wanna chitty chat send me an email, ring me up, or we can Skype over coffee-- whichever you prefer! I’d love to work with you.
      //               </p>
      //             </div>

      //             <div class="contact__form" data-aos="flip-right" data-aos-duration="1200"  data-aos-offset="300">
      //               <form name="contact" method="POST" data-netlify="true">

      //                   <label class="contact__form--label">Name</label><br>
      //                   <input class="contact__form--input" type="text" name="name" />

      //                   <label class="contact__form--label"
      //                     >E-mail</label><br>
      //                     <input
      //                       class="contact__form--input"
      //                       type="email"
      //                       name="email"
      //                   />

      //                   <label class="contact__form--label"
      //                     >Message</label><br>
      //                     <textarea
      //                       class="contact__form--textBox"
      //                       name="message"
      //                     ></textarea
      //                   >

      //                   <button class="contact__form--btn" type="submit">Send</button>

      //               </form>
      //             </div>

      //             <div class="contact__details">
      //               <div class="contact__details--email">
      //                 <img
      //                   class="contact__details--icon"
      //                   src="./assets/email.svg"
      //                   alt="email"
      //                 />
      //                 <p class="contact__details--text">JennaStrusowski@gmail.com</p>
      //               </div>

      //               <div class="contact__details--phone">
      //                 <img
      //                   class="contact__details--icon"
      //                   src="./assets/phone.svg"
      //                   alt="telephone"
      //                 />
      //                 <p class="contact__details--text">(267) 222-2667</p>
      //               </div>

      //               <div class="contact__details--skype">
      //                 <img
      //                   class="contact__details--icon"
      //                   src="./assets/skype.svg"
      //                   alt="telephone"
      //                 />
      //                 <p class="contact__details--text">JennaStrusowski</p>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
    );
  }
}

export default Contact;
