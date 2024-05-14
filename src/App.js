import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Section from './components/Section';

import Home from './pages/Home/home';
import Sobrenos from './pages/Sobrenos/sobrenos';
import Causa from './pages/Causa/causa';
import Faleconosco from './pages/Faleconosco/faleconosco';
import Privacidade from './pages/Privacidade/privacidade';
import Apoie from './pages/Apoie/apoie';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Main />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sobrenos' element={<Sobrenos />}></Route>
          <Route path='/causa' element={<Causa />}></Route>
          <Route path='/faleconosco' element={<Faleconosco />}></Route>
          <Route path='/privacidade' element={<Privacidade />}></Route>
          <Route path='/apoie' element={<Apoie />}></Route>
        </Routes>
        <Section />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
