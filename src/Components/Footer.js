import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/hstyle.css';

const Footer = () => {
  return (
    <div className="nav-bar">
      <Link className="sound-button" to="/">Home</Link>
      <Link className="sound-button" to="/apps">Apps</Link>
      <Link className="sound-button" to="/projects">Projects</Link>
      <Link className="sound-button" to="/join">Join</Link>
    </div>
  );
};

export default Footer;
