import React from 'react';
import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <>
      <div className='push'></div>
      <footer className='footer'>
        <div className='flex flexResponsive flexJustifyBetween flexAlignItemsCenter'>
          <div className='footer--left'>
            <a href='/'>© 2022 Bryant Cobarrubias</a>
          </div>
          <div className='footer--nav'>
            <ul>
              <li>
                <Link
                  to='top'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className='home'
                  duration={500}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    id='Outline'
                    viewBox='0 0 24 24'
                    width='15'
                    height='15'
                  >
                    <path d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z' />
                  </svg>{' '}
                </Link>
              </li>
              <li>
                <a href='/#/projects'>Projects</a>
              </li>
              <li>
                <a href='/#/contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
