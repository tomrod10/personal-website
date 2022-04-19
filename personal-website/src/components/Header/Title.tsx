import React from "react";
import { Link } from 'react-router-dom';

import { websiteTitle } from '../../core-data/website-data.ts'

import styles from './Title.module.css'

export const Title: React.ReactNode = () => {
  return(
    <Link to="/">
        <h1 className={styles.title}>
          {websiteTitle}
        </h1>
    </Link>
  )
}
