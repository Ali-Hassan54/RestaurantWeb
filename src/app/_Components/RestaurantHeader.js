import React from 'react'
import Link from "next/link";
import { useState } from 'react';
const RestaurantHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
    <div style={styles.logo}>
      <Link href="/">MyEcommerce</Link>
    </div>
    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)} 
      style={styles.hamburgerMenu}
    >
      ☰
    </button>
    <div style={{ ...styles.navLinks, display: isMenuOpen ? 'flex' : 'none' }}>
      <Link href="/" style={styles.link}>Home</Link>
      <Link href="/products" style={styles.link}>Products</Link>
      <Link href="/about" style={styles.link}>About</Link>
      <Link href="/contact" style={styles.link}>Contact</Link>
    </div>
  </nav>
  )
}

// Inline styles for the navbar
const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      position: 'relative',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    hamburgerMenu: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1.5rem',
      color: '#fff',
      cursor: 'pointer',
      display: 'block',
      outline: 'none',
    },
    navLinks: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#333',
      position: 'absolute',
      top: '100%',
      right: '0',
      width: '100%',
      padding: '10px 0',
    },
    link: {
      textDecoration: 'none',
      color: '#fff',
      padding: '10px 20px',
      display: 'block',
      width: '100%',
      textAlign: 'center',
    },
    linkHover: {
      color: '#ccc',
    },
  };

export default RestaurantHeader
