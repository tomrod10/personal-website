import React from "react"
import { useParams } from "react-router-dom"

import { images } from "../../images/index.ts"

import styles from "./MainContent.module.css"

interface Image {
  title: string,
  date: string,
  description: string,
  img: string,
  author: string,
  categories: string[],
}

export const Gallery = ({ isGridView }) => {
  const category = useParams().category

  const filtered: Image[] = (images.filter(((image: Image) => image.categories.includes(category))))

  return(
    <div className={!isGridView ? styles.gallery : styles.galleryGrid}>
      {filtered.map((image: Image) => {
        return <img src={image.img} className={!isGridView ? styles.item : styles.item2} alt={image.title} key={image.img}/>
      })}
    </div>
  )
}
