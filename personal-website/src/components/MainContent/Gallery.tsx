import React, { useState, useEffect } from "react"
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


export const Gallery = () => {
  const category = useParams().all // don't know why it's all under 'all' ???
  const [filter, setFilter] = useState('all')
  useEffect(() => {
    setFilter(category)
  }, [category])

  const filtered: Image[] = (images.filter(((image) => image.categories.includes(filter))))

  return (
    <div className={styles.gallery}>
      {filtered.map((image: Image) => {
        return <img src={image.img} className={styles.item} alt={image.title} key={image.img}/>
      })}
    </div>
  )
}
