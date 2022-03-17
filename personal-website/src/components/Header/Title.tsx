import React from "react";

interface mainTitle {
  title: String
}

export const Title: React.ReactNode = (mainTitle: mainTitle) => {
  const { title } = mainTitle
  return(
    <div>
      {title}
    </div>
  )
}
