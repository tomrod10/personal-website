import React from "react";

import { Title } from './Title.tsx'
import { NavBar } from './NabBar.tsx';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Title />
      <NavBar />
    </div>
  )
}
