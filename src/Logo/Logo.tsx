import React from 'react';
import styles from './Logo.module.css';
/* eslint-disable */
import logoUrl from '/logo-starbucks.svg';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoUrl}></img>
    </div>
  );
};
