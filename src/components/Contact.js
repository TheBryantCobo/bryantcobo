import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className='social-container'>
        <h3>Find me on social</h3>
        <a href='' target='_blank' rel='noopener'>
          <img src='/images/facebook.png' className='social-icon' />
        </a>
        <a href='' target='_blank' rel='noopener'>
          <img src='/images/twitter.png' className='social-icon' />
        </a>
        <a href='' target='_blank' rel='noopener'>
          <img src='/images/linkedin.png' className='social-icon' />
        </a>
        <a href='' target='_blank' rel='noopener'>
          <img src='/images/instagram.png' className='social-icon' />
        </a>
      </section>
      <section className='form-container'>
        <h3>Send me an email</h3>
        <form>
          <div>
            <p>
              Name
              <br />
              <input
                type='text'
                name='name'
                size='40'
                className='contact--form-input'
              />
            </p>
          </div>
          <div>
            <p>
              Email
              <br />
              <input
                type='email'
                name='email'
                size='40'
                className='contact--form-input'
              />
            </p>
          </div>
          <div>
            <p>
              Message
              <br />
              <textarea
                name='message'
                size='40'
                className='contact--form-input'
              ></textarea>
            </p>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </section>
      <div className='clearfix'></div>
    </div>
  );
};

export default Contact;
