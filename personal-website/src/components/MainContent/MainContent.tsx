import React, { useState } from "react"
import { Gallery } from "./Gallery.tsx"
import { SideBar } from "./SideBar.tsx"

import styles from "./MainContent.module.css"

export const MainContent = () => {
  const [isGridView, setIsGridView] = useState(false)

  return(
    <div className={styles.container}>
      <Gallery isGridView={isGridView} />
      <SideBar onViewSwitch={setIsGridView} view={isGridView}/>
    </div>
  )
}
