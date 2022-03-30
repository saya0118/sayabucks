import React, { useState } from 'react';
import styles from './Hamburger.module.css';

const [open, setOpen] = useState(false);

export const Hamburger = () => {
  return (
    <div className={styles.navbar} onClick={() => setOpen(!open)}>
      <div className={`${styles.hamburger} ${open ? 'styles.active' : ''}`}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};
