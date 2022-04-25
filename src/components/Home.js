import React, { useState, useContext } from 'react';

const Home = () => {
  return (
    <>
      <h2>About me</h2>
      <p>
        I enjoy writing software to solve problems. For several years I helped
        teachers use technology in thier classrooms. Presently, I'm the lead
        deveoper and CTO for{' '}
        <a href='https://scansearch.com' target='_blank' rel='noopener'>
          ScanSearch.com
        </a>
        . I'm also open to freelancing opportunities.
      </p>
      <p>
        {' '}
        In my free time, I enjoy{' '}
        <a
          href='https://www.youtube.com/channel/UCb_9qdp8KSW1EofIchDemIg/videos'
          target='_blank'
          rel='noopener'
        >
          swinging heavy blunt objects at my friends
        </a>
        ,{' '}
        <a
          href='https://www.youtube.com/c/EdTechCafe'
          target='_blank'
          rel='noopener'
        >
          making video tutorials
        </a>
        , and spending time with my wife and three kids.
      </p>

      <h2>Experience</h2>
      <div className='exp'>
        <div className='exp--pos'>
          <div className='exp-corp'>Radiant Solutions LLC</div>
          <div className='exp-title'>CTO</div>
          <div className='exp-term'>2021-Present</div>
        </div>
        <div className='exp--desc exp--desc-first'>
          Design and develop online document imaging and workflow solutions for
          a SaaS environment. Deploy and manage systems using the Microsoft
          Azure platform.
        </div>

        <div className='exp--pos'>
          <div className='exp-corp'>School District of Manawa</div>
          <div className='exp-title'>Technology Director</div>
          <div className='exp-term'>2017-2021</div>
        </div>
        <div className='exp--desc'>
          Technology leader and part of the school district administration team.
          Responsible for all aspects of technology including network
          administration, server management, systems integration, training, and
          maintenance.
        </div>

        <div className='exp--pos'>
          <div className='exp-corp'>Manitowoc School District</div>
          <div className='exp-title'>Data & Technology Specialist</div>
          <div className='exp-term'>2014-2017</div>
        </div>
        <div className='exp--desc'>
          Serve as technology advisor to administrators and educators. Trusted
          on projects involving classroom technology, communications,
          professional development, assessment, and custom software design.
          Collaborate with others to build consensus, plan, and implement
          technology goals.
        </div>

        <div className='exp--pos'>
          <div className='exp-corp'>Open Scan Technologies</div>
          <div className='exp-title'>Senior Software Engineer</div>
          <div className='exp-term'>2011-2013</div>
        </div>
        <div className='exp--desc'>
          Designed enterprise document imaging and workflow management solutions
          to streamline and automate accounts payable processes. Developed using
          .NET, Microsoft SQL Server, and AJAX technologies.
        </div>

        <div className='exp--pos'>
          <div className='exp-corp'>DocEdge, Inc</div>
          <div className='exp-title'>Owner</div>
          <div className='exp-term'>2004-2011</div>
        </div>
        <div className='exp--desc'>
          Developed, marketed, and maintained custom accounts payable solutions.
          Consulted with clients to understand goals and tailor solution to fit
          their needs. Integrated disparate systems to create unified solutions.
        </div>
      </div>
    </>
  );
};

export default Home;
