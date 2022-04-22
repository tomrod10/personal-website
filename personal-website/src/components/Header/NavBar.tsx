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
          <Link to="/design">design</Link>
        </li>
        <li>
          <Link to="/images">images</Link>
        </li>
        <li>
          <Link to="/architecture">architecture</Link>
        </li>
        <li>
          <Link to="/art">art</Link>
        </li>
        <li>
          <Link to="/other">other</Link>
        </li>
      </ul>
    </nav>
  )
}