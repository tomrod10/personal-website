import React from "react";
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'

export const NavBar = () => {
  return(
    <nav className={styles.navbar}>
      <Link to="/test">TEST</Link>
      <a>{'all'}</a>
      <a>{'design'}</a>
      <a>{'images'}</a>
      <a>{'architecture'}</a>
      <a>{'art'}</a>
      <a>{'other'}</a>
    </nav>
  )
}