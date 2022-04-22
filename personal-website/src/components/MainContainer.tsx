import React from "react"

import styles from './MainContainer.module.css'

import { NavBar } from "./Header/NavBar.tsx"
import { MainContent } from "./MainContent/MainContent.tsx"

export const MainContainer = () => {
  return(
    <div className={styles.mainContainer}>
      <NavBar />
      <MainContent />
    </div>
  )
}
