import React from 'react';
import styles from './Header.module.css';
import { Item } from '../Item';
import { Button } from '../Button';
// import Logo from './Logo'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Item text="menu" url="/menu" />
      <Item text="rewards" url="/rewards" />
      <Item text="gift cards" url="/gift" />
      <Button className={styles.white} text="Sign in" />
      <Button className={styles.black} text="Join now" />
    </div>
  );
};
