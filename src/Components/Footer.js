import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/hstyle.css';
import { useClickSound } from '../Assets/hooks/useHoverSound';

const Footer = () => {
  const playClickSound = useClickSound();

  return (
    <div className="nav-bar">
      <Link className="sound-button" to="/" onClick={playClickSound}>Home</Link>
      <Link className="sound-button" to="/apps" onClick={playClickSound}>Apps</Link>
      <Link className="sound-button" to="/projects" onClick={playClickSound}>Projects</Link>
      <Link className="sound-button" to="/join" onClick={playClickSound}>Join</Link>
    </div>
  );
};

export default Footer;
