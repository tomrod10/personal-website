import React from "react";
import { SideBar } from "./SideBar.tsx";
import { Gallery } from "./Gallery.tsx";

import styles from "./MainContent.module.css"

export const MainContent = () => {
  return(
    <div className={styles.container}>
      <SideBar />
      <Gallery />
    </div>
  )
}
