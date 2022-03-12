import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  className: string;
  text: string;
};

export const Button = ({ className, text }: ButtonProps) => {
  return <button className={styles[className]}>{text}</button>;
};
