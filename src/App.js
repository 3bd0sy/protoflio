import Navbar from './components/NavBar/Navbar';
import Intro from './components/intro/intro';
import './App.css';
import Services from './components/services/services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/footer';
import { useContext } from 'react';
import { themeContext } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return <div className="App"
  style={{
    background:darkMode? "black":"",
    color:darkMode?"white":"",
    zIndex:"-10"
  }}
  >
    <Navbar />
    <Intro />
    <Services />
    <Experience />
    <Works />
    <Portfolio />
    <Testimonials />
    <Footer />
  </div>

}

export default App;
