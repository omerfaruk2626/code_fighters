import React from 'react';
import './App.scss';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Sections from './components/Sections/Sections.jsx';
import Search from './components/Search/Search.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Sections" element={<Sections />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
