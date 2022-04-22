import React from "react";

import { Header } from '../Header/Header.tsx'
import { MainContent } from '../MainContent/MainContent.tsx';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}
