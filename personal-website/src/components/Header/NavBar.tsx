import React from "react";
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'

export const NavBar = () => {
  return(
    <nav className={styles.navbar}>
      <ul className={styles.navBarItem}>
        <li>
          <Link to="/">all</Link>
        </li>
        <li>
          <Link to="/other">other</Link>
        </li>
      </ul>

      <a>{'design'}</a>
      <a>{'images'}</a>
      <a>{'architecture'}</a>
      <a>{'art'}</a>
      {/* <a>{'other'}</a> */}
    </nav>
  )
}