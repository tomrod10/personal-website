import React from "react";
import { Gallery } from "./Gallery.tsx";

import styles from "./MainContent.module.css"

export const MainContent = () => {
  return(
    <div className={styles.container}>
      <Gallery />
    </div>
  )
}
