import React from "react";

import gridIcon2 from "../../icons/svg-icons/gridIcon2.svg";
import solidSquare from "../../icons/svg-icons/solidSquare.svg";

import styles from "./MainContent.module.css"


export const SideBar = ({ view, onViewSwitch }) => {
  const handleGalleryView = (view: boolean) => {
    onViewSwitch(view)
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.icon} onClick={() => handleGalleryView(false)}>
        <img src={solidSquare} alt="Column view" />
      </div>
      <div className={styles.icon} onClick={() => handleGalleryView(true)}>
        <img src={gridIcon2} alt="Grid view" />
      </div>
    </div>
  )
}
