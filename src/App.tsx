import React from 'react';
import { Header } from './components/header/Header';
import { Nosotros } from './Nosotros';
import Sedes from './Sedes';
import Planes from './Planes';
import Contacto from './Contacto';
import Footer from './Footer';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <video
        src="/video-inicio.mp4"
        autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto' }}
      />

      <div id="nosotros">
        <Nosotros/>
      </div>
      <div id="sedes">
        <Sedes/>
      </div>
      <div id="planes">
        <Planes/>
      </div>
      <div id="contacto">
        <Contacto/>
      </div>
      <Footer/>
    </>
  );
}

export default App;