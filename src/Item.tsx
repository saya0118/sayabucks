import React from 'react';
import styles from './Item.module.css';

type ItemProps = {
  text: string;
  url: string;
};

export const Item = (props: ItemProps) => {
  return (
    <a className={styles.text} href={props.url}>
      {props.text}
    </a>
  );
};
