import './index.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <div className='clearfix'></div>
      <main>
        <div className='main--content'>
          <Intro />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <div className='clearfix'></div>
        <Social />
      </main>
      <footer>
        <div>Created by Bryant Cobarrubias</div>
      </footer>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
