import React from 'react';
import styles from './MainTextBox.module.css';

type MainTextBoxProps = {
  span: string;
  description: string;
  titleSize: string;
  descriptionSize: string;
};

export const MainTextBox = ({
  span,
  description,
  titleSize,
  descriptionSize,
}: MainTextBoxProps) => {
  return (
    <>
      <h2 className={styles.title}>
        <span className={styles[titleSize]}>{span}</span>
      </h2>
      <div className={styles[descriptionSize]}>{description}</div>
    </>
  );
};
