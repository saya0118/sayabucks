import React, { useContext } from 'react';
import { OpenContext } from '../Context/OpenContext';
import styles from './Hamburger.module.css';

export const Hamburger: React.VFC = () => {
  const open = useContext(OpenContext);
  return (
    <div
      className={styles.navbar}
      onClick={() => open?.setAction(!open?.action)}
    >
      <div
        className={`${styles.hamburger} ${open?.action ? styles.active : ''}`}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};
