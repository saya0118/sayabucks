import React from 'react';
import './Button.module.css';

type ButtonProps = {
  className: string;
  text: string;
};

export const Button = ({ className, text }: ButtonProps) => {
  return <button className={className}>{text}</button>;
};
