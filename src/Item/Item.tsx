import React from 'react';
import styles from './Item.module.css';

type ItemProps = {
  text: string;
  url: string;
  fontWeight: string;
};

export const Item = ({ text, url, fontWeight }: ItemProps) => {
  return (
    <a
      className={`${styles[fontWeight]} ${styles['items-list-text']}`}
      href={url}
    >
      {text}
    </a>
  );
};
