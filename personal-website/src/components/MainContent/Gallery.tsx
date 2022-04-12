import React from "react";
import { dummyData } from "../../core-data/dummy-data.ts";
import { images } from "../../images"

import styles from "./MainContent.module.css"

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <img src={image.img} className={styles.item} alt={image.title}/>
      ))}
    </div>
  )
}