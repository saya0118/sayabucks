import React from 'react';
import styles from './MainTextBox.module.css';
// import { Button } from '../Button';

type MainTextBoxProps = {
  span: string;
  description: string;
};

export const MainTextBox = ({ span, description }: MainTextBoxProps) => {
  return (
    <>
      <h2 className={styles.title}>
        <span>{span}</span>
      </h2>
      <div className={styles['inner-text']}>{description}</div>
    </>
  );
};
