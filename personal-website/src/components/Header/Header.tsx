import React from "react";

import { Title } from './Title.tsx'

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <div className={styles.test}>
      <Title title={'zABhorh'} />
    </div>
  )
}
