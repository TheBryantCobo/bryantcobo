import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ScanSearch',
      url: 'https://www.scansearch.com',
      img: 'scansearch.png',
      desc: (
        <>
          <p>
            ScanSearch provides full-text storage and retrieval on all your
            scanned documents. A long-time friend and former boss approached me
            with this product idea.
          </p>
          <p>
            Together we designed this service to bring document imaging
            solutions to small and medium-sized businesses.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: 'BryantCobo.com',
      url: 'https://www.bryantcobo.com',
      img: 'bc-logo.png',
      desc: (
        <>
          <p>
            I created the website you're viewing now. The goal was to create a
            fast and simple site using only HTML, CSS, and React.
          </p>{' '}
          <p>
            The design is inspired by{' '}
            <a href='https://www.ybrikman.com/ ' target='_blank'>
              Yevgeniy Brikman's
            </a>{' '}
            personal page. I also recreated elements found on{' '}
            <a href='https://jtom.me/talks/' target='_blank'>
              Jack Tomaszewski’s
            </a>{' '}
            website.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: 'EdTech Cafe YouTube Channel',
      url: 'https://www.youtube.com/c/edtechcafe',
      img: 'edtech-cafe-youtube.png',
      desc: (
        <>
          <p>
            I was a technology director for a public school district when the
            pandemic hit. My immediate challenge was to help teachers, students,
            and parents navigate learning online - with about four days' notice.
          </p>
          <p>
            To help our learning community I created tutorial videos and shared
            them on YouTube. I left K-12 education in 2021, however, I continue
            to create tutorial videos on this channel.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: 'EdTech.cafe WordPress Blog',
      url: 'https://edtech.cafe',
      img: 'edtech-cafe-wordpress.png',
      desc: (
        <>
          <p>
            The website is a companion WordPress blog for the YouTube channel.
            This site uses the{' '}
            <a href='https://avada.theme-fusion.com/'>Avada theme</a>.
          </p>
        </>
      ),
    },
  ];

  const Project = ({ id, title, url, img, imgSize, desc }) => {
    console.log(title);

    return (
      <>
        <article className='project' key={id}>
          <a href={url} target='_blank' rel='noopener'>
            <img
              src={`./images/${img}`}
              className='project--img'
              width='200'
              height='200'
              alt={title}
            />
          </a>
          {/* <div className='project--img'></div> */}
          <div className='project--info'>
            <h2 className='project--name'>
              <a href={url} target='_blank' rel='noopener'>
                {title}
              </a>
            </h2>
            <a
              href={url}
              className='project--url'
              target='_blank'
              rel='noopener'
            >
              {url}
            </a>
            <div className='project--desc'>{desc}</div>
          </div>
          <div className='clearfix'></div>
        </article>
      </>
    );
  };

  return (
    <section className='projects'>
      {projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </section>
  );
};

export default Projects;
