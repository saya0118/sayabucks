import React from 'react';
import styles from './Header.module.css';
import { Item } from '../Item';
// import Logo from './Logo'
// import Button from './Button';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Item text="menu" url="/menu" />
      <Item text="rewards" url="/rewards" />
      <Item text="gift cards" url="/gift" />
    </div>
  );
};
