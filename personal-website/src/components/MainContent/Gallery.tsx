import React from "react";
import { images } from "../../images/index.ts"

import styles from "./MainContent.module.css"

interface props {
  category?: string,
}

interface image {
  title: string,
  date: string,
  description: string,
  img: string,
  author: string,
  categories: string[],
}

export const Gallery = (category: props) => {
  return (
    <div className={styles.gallery}>
      {images.map((image: image) => (
        <img src={image.img} className={styles.item} alt={image.title} key={image.img}/>
      ))}
    </div>
  )
}
