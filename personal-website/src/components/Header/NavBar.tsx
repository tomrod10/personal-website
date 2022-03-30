import React from "react";

import styles from './NavBar.module.css'

export const NavBar = () => {
  return(
    <div className={styles.navbar}>
      <a>{'about'}</a>
      <a>{'gallery'}</a>
      <a>{'contact'}</a>
    </div>
  )
}