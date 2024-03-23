import './App.scss';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Sections from './components/Sections/Sections.jsx';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Contact />
      <About />
      <Footer />
      <Sections />
    </div>
  );
}

export default App;
