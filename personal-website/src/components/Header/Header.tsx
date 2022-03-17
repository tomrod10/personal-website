import React from "react";

import { Title } from './Title.tsx'
import { NavBar } from './NavBar.tsx';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Title />
      <NavBar />
    </div>
  )
}
