import React from 'react';
import { Header } from './components/header/Header';
import { Button } from '@mui/material';
import { Nosotros } from './Nosotros';
import Sedes from './Sedes';
import Planes from './Planes';


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

      <Nosotros/>
      <Sedes/>
      <Planes/>
    </>
  );
}

export default App;