import React, { useState, useEffect } from "react"
import { images } from "../../images/index.ts"

import { compact } from 'lodash'

import styles from "./MainContent.module.css"

interface Image {
  title: string,
  date: string,
  description: string,
  img: string,
  author: string,
  categories: string[],
}

export const Gallery = ({category = 'all'}) => {
  let [filter, setFilter] = useState(category)
  useEffect(() => {
    setFilter(category)
  }, [category])

  const filtered: Image[] = compact(images.map((image) => {
    return image.categories.includes(filter) ? image :  null
  }))

  return (
    <div className={styles.gallery}>
      {filtered.map((image: Image) => {
        return <img src={image.img} className={styles.item} alt={image.title} key={image.img}/>
      })}
    </div>
  )
}
