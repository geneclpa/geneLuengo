import './App.css';

import { Acerca } from './components/Acerca';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroImage } from './components/HeroImage';
import { Servicios } from './components/Servicios';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <HeroImage />
      <Acerca />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;