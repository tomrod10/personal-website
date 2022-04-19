import React from "react";
import { images } from "../../images/index.ts"

import styles from "./MainContent.module.css"

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <img src={image.img} className={styles.item} alt={image.title} key={image.img}/>
      ))}
    </div>
  )
}
