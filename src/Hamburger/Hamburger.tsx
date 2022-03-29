import React from 'react';
import styles from './Hamburger.module.css';

export const Hamburger = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.hamburger}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};
