import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Style/navbar.module.css';
import midgardLogo from '../assets/midgard-logo.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={midgardLogo} alt="Midgard Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/food-places">Food Places</Link></li> {/* Link to Food Places */}
        <li><Link to="/location">Location</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
