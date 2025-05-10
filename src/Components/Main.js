import React from 'react';
import { useClickSound } from '../Assets/hooks/useHoverSound';

const Main = () => {
  const playClickSound = useClickSound();

  return (
    <div className="hero">
      <div className="heroT">
        <h1 style={{ textAlign: 'center', color: 'white', width: '100%', margin: '0 auto' }}>Welcome to </h1>
        <h2>XAEZOR</h2>
        <h2>XAEZOR</h2>
      </div>
    </div>
  );
};

export default Main;
