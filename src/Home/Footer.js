import React from 'react';
import styles from '../Style/footer.module.css';
import midgardLogo from '../assets/midgard-logo.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={midgardLogo} alt="Midgard Logo" />
      </div>
      <div className={styles.contactInfo}>
        <h3>Contact Us</h3>
        <p>email@email.com</p>
        <p>09123456789</p>
        <p>address, city, province</p>
      </div>
      <div className={styles.socialIcons}>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </footer>
  );
}

export default Footer;
