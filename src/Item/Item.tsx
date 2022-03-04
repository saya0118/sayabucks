import React from 'react';
import styles from './Item.module.css';

type ItemProps = {
  text: string;
  url: string;
};

export const Item = ({ text, url }: ItemProps) => {
  return (
    <a className={styles.item} href={url}>
      {text}
    </a>
  );
};
