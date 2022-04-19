import React from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

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
