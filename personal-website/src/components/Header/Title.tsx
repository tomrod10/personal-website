import React from "react";
import { websiteTitle } from '../../core-data/website-data.ts'
import styles from './Title.module.css'

export const Title: React.ReactNode = () => {
  return(
    <div className={styles.title}>
      {websiteTitle}
    </div>
  )
}
