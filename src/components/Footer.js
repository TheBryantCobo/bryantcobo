import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='push'></div>
      <footer className='footer'>
        <div className='flex flexResponsive flexJustifyBetween flexAlignItemsCenter'>
          <div className='footer--left'>
            <a href='https://www.bryantcobo.com'>© 2022 Bryant Cobarrubias</a>
          </div>
          <div className='footer--nav'>
            <ul>
              <li>
                <a href='./'>Home</a>
              </li>
              <li>
                <a href='./projects'>Projects</a>
              </li>
              <li>
                <a href='./contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
