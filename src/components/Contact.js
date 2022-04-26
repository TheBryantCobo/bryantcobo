import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className='social-container'>
        <h3>Find me on social</h3>
        <a
          href='https://www.facebook.com/bryantcobo'
          target='_blank'
          rel='noopener'
        >
          <img src='/images/facebook.png' className='social-icon' />
        </a>
        <a href='https://twitter.com/bryantcobo' target='_blank' rel='noopener'>
          <img src='/images/twitter.png' className='social-icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/bryantcobarrubias/'
          target='_blank'
          rel='noopener'
        >
          <img src='/images/linkedin.png' className='social-icon' />
        </a>
        <a
          href='https://www.instagram.com/hemageeking/'
          target='_blank'
          rel='noopener'
        >
          <img src='/images/instagram.png' className='social-icon' />
        </a>
      </section>
      <section className='email-container'>
        <h3>Send me an email</h3>
        <div>
          Feel free to contact me via email at{' '}
          <a href='mailto:me@bryantcobo.com'>me@bryantcobo.com</a> or reach out
          on social media.
        </div>
      </section>
      <section className='video-container'>
        <h3>Video tutorials</h3>
        <div className='video-logo'>
          <a
            href='https://www.youtube.com/c/edtechcafe'
            target='_blank'
            rel='noopener'
          >
            <img src='/images/youtube.png' className='contact-yt' />
          </a>
        </div>
        <div className='video-desc'>
          Have a look at my{' '}
          <a href='youtube.com/c/edtechcafe' target='_blank' rel='noopener'>
            technology tutorial channel
          </a>
          . I started it while working in public schools.
        </div>
      </section>
      <div className='clearfix'></div>
    </div>
  );
};

export default Contact;
