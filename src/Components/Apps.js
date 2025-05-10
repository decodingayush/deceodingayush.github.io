import React from 'react'
import '../Assets/css/hstyle.css';
import { Link } from 'react-router-dom';
import { useClickSound } from '../Assets/hooks/useHoverSound';

export const Apps = () => {
  const playClickSound = useClickSound();

  return (
    <div className="apps-container">
      <Link className="app-link" to="/app1" onClick={playClickSound}>App 1</Link>
      <Link className="app-link" to="/app2" onClick={playClickSound}>App 2</Link>
      <Link className="app-link" to="/app3" onClick={playClickSound}>App 3</Link>
    </div>
  )
}
