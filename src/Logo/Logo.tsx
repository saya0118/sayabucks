import React from 'react';
import styles from './Logo.module.css';
// eslint-disable-next-line import/no-unresolved
import logoUrl from '/logo-starbucks.svg';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoUrl}></img>
    </div>
  );
};
