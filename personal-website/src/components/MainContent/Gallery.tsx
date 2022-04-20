import React from "react"
import { images } from "../../images/index.ts"

import { filter } from 'lodash'

import styles from "./MainContent.module.css"

interface image {
  title: string,
  date: string,
  description: string,
  img: string,
  author: string,
  categories: string[],
}

export const Gallery = ({category}) => {
  console.log(category)
  const filtered: object[] = filter(images, images.categories?.includes(category))
  console.log({filtered})
  return (
    <div className={styles.gallery}>
      {images.map((image: image) => (
        <img src={image.img} className={styles.item} alt={image.title} key={image.img}/>
      ))}
    </div>
  )
}
