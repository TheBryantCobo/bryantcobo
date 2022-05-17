import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [hamActive, setHamActive] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    document.documentElement.dataset.scroll = offset;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleHamburger = () => {
    setHamActive(!hamActive);
  };

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', handleHamburger);

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    handleScroll();

    return function cleanupListener() {
      hamburger.removeEventListener('click', handleHamburger);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  let navbarMenuClasses = ['nav-menu'];
  let hamburgerMenuClasses = ['hamburger'];
  if (hamActive) {
    navbarMenuClasses.push('active');
    hamburgerMenuClasses.push('active');
  }

  return (
    <header>
      <nav className={navbarClasses.join(' ')}>
        <a href='./' className='nav-branding'>
          <span className='dgreen-text garet-heavy'>Bryant </span>
          <span className='lgreen-text garet-heavy'>Cobarrubias</span>
        </a>
        <ul className={navbarMenuClasses.join(' ')}>
          <li className='nav-item'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='skills'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='experience'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={hamburgerMenuClasses.join(' ')}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

// return (
//   // <header className='navbar'>
//   <header className={navbarClasses.join(' ')}>
//     <div className='flex  flexJustifyBetween flexAlignItemsCenter'>
//       <div className='logo'>
//         <a href='./' className='name'>
//           <span className='dgreen-text garet-heavy'>Bryant </span>
//           <span className='lgreen-text garet-heavy'>Cobarrubias</span>
//         </a>
//       </div>
//       <nav className=''>
//         <ul>
//           <li className='collapse'>
//             <Link
//               to='about'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               About
//             </Link>
//           </li>
//           <li className='collapse'>
//             <Link
//               to='skills'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Skills
//             </Link>
//           </li>
//           <li className='collapse'>
//             <Link
//               to='experience'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Experience
//             </Link>
//           </li>
//           <li className='collapse'>
//             <Link
//               to='projects'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Projects
//             </Link>
//           </li>
//           <li className='collapse'>
//             <Link
//               to='contact'
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   </header>
// );
