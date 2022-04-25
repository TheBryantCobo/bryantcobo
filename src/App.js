import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Router>
          <Routes>
            <Route
              exact
              path='/'
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
                  subtitle={
                    <>
                      Need help with your project? Let's chat. Feel free to
                      contact me via email at{' '}
                      <a href='mailto:me@bryantcobo.com'>me@bryantcobo.com</a>{' '}
                      or reach out on social media.
                    </>
                  }
                  mainBody={<Contact />}
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
