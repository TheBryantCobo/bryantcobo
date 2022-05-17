import React from 'react';
const About = () => {
  return (
    <section className='about'>
      <div className='anchor' id='about'></div>
      <div className='container'>
        <div className='content'>
          <h2>About Me</h2>
          <div className='about--container'>
            <div className='about--picture'>
              <img
                src='/images/bryant-cobarrubias.png'
                width='100%'
                alt='Bryant Cobarrubias'
                className='about--picture--img'
              />
            </div>
            <div className='about--message'>
              <p>
                I’m Bryant Cobarrubias, an experienced full-stack developer
                based in Wisconsin. I’ve been writing software for over twenty
                years, working for a variety of customers and industries. My
                focus has been document imaging solutions and automating
                workflow tasks.
              </p>

              <p>
                <span>In my free time, I enjoy </span>
                <a
                  href='https://www.youtube.com/channel/UCb_9qdp8KSW1EofIchDemIg/videos'
                  target='_blank'
                  rel='noreferrer'
                >
                  swinging heavy blunt objects at my friends
                </a>
                <span>, </span>
                <a
                  href='https://www.youtube.com/c/EdTechCafe'
                  target='_blank'
                  rel='noreferrer'
                >
                  making video tutorials
                </a>
                <span>, and spending time with my wife and three kids.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
