import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Page = ({ title, subtitle, mainBody }) => {
  console.log(subtitle);

  return (
    <>
      <div className='page-title--container'>
        <div className='page-title--content'>
          <div className='clearfix'></div>
          <h1 className='page-title--title'>{title}</h1>
          <p className='page-title--subtitle'>{subtitle}</p>
        </div>
      </div>
      <div className='main--content'>{mainBody}</div>
    </>
  );
};

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <Router hashType='slash'>
          <Routes>
            <Route
              path='/projects'
              element={
                <Page
                  title='Projects'
                  subtitle={
                    <>
                      Here are some sample projects I’ve worked on.{' '}
                      <a href='/contact'>Reach out</a> to see if I’m a good fit
                      for your project.
                    </>
                  }
                  mainBody={<Projects />}
                />
              }
            />

            <Route
              path='/contact'
              element={
                <Page
                  title='Contact'
                  subtitle={<>Need help with your project? Let's chat.</>}
                  mainBody={<Contact />}
                />
              }
            />

            <Route
              path='/'
              exact
              element={
                <Page
                  title="Hello.  I'm Bryant."
                  subtitle={
                    <>
                      I'm a Wisconsin based full-stack C#.NET, React, Node.js,
                      and SQL developer.
                    </>
                  }
                  mainBody={<Home />}
                />
              }
            />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;
