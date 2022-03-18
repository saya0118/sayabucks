import React from 'react';
import { Header } from '../Header';
import { Page } from '../Page';
import { Footer } from '../Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Page />
      <Footer />
    </div>
  );
}
