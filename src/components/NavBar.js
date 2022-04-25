import React from 'react';

const NavBar = () => {
  return (
    <header>
      <div className='flex flexResponsive flexJustifyBetween flexAlignItemsCenter'>
        <div className='logo'>
          <a href='./'>&#123; Bryant Cobarrubias &#125;</a>
        </div>
        {/* <div className='width100'>&nbsp;</div> */}
        <nav className=''>
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
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
