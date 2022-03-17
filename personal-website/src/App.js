import React from 'react'
import { HomePage } from './components/HomePage/HomePage.tsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <HomePage />
    </div>
  );
}

export default App;
