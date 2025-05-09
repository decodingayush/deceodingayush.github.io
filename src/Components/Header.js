import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/hstyle.css';
import { useClickSound } from '../Assets/js/useClickSound';

export const Header = () => {
  const [username, setUsername] = useState(null);
  const handleClick = useClickSound();

  useEffect(() => {
    // Fetch username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername(null);
    }
  }, []);

  return (
    <h2>
      <Link className="sound-button" to="/sponsor" onClick={handleClick()}>
        <span className="donate">Sponsor</span>
      </Link>
      {username ? (
        <Link className="sound-button fixed-button profile-view" to="/profile" onClick={handleClick()}>
          <span className="profile-username">{username}</span>
        </Link>
      ) : (
        <Link className="sound-button fixed-button profile-view" to="/login" onClick={handleClick()}>
          <span className="profile-username">Login</span>
        </Link>
      )}
    </h2>
  );
};

export default Header;

