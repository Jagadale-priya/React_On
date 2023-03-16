import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/experience';
import Works from './Components/Works/works';
import PoartrFolio from './Components/PoartrFolio/poartf';
import Testimonials from './Components/Testimonials/testimonials';
import Contect from './Components/Contects/contect';
import Footer from './Components/Footer/footer';
import Toggle from './Components/Toggle/toggle';
import {themeContext} from './Contectxt';
import { useContext } from 'react';

function App() {
  const theme  = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': '',
    }}>

      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <PoartrFolio/>
      <Testimonials/>
      <Contect/>
      <Footer/>
      <Toggle/>
    </div>
  );
}

export default App;
