import React from "react";
import { dummyData } from "../../core-data/dummy-data.ts";
import 'Any weight_Any size_5th try_4300.jpg' from ../../core-data/dummy-data.ts

import styles from "./MainContent.module.css"

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      {dummyData.map((item) => (
        <div className={styles.item}>{item}</div>
        // <img></img>
      ))}
    </div>
  )
}