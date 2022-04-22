import React from "react";

import { NavBar } from './NavBar.tsx';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NavBar />
    </div>
  )
}
