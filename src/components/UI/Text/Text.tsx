import React from 'react';
import { Textwrapper } from './Text.styled';

interface HeaderProps {
  text?: string;
  number?: number;
  color?: 'green' | 'red' | 'none';
}

const Text = (props: HeaderProps) => {
  let isNumberPositive = props.number ? props.number >= 0 : null;
  if (props.color) {
    switch (props.color) {
      case 'green':
        isNumberPositive = true;
        break;
      case 'red':
        isNumberPositive = false;
        break;
      case 'none':
        isNumberPositive = null;
        break;
      default:
        break;
    }
  }
  let numberValue: number | null = null;
  if (props.number !== undefined) {
    numberValue = Number(props.number.toFixed(3));
  }
  return (
    <Textwrapper isNumberPositive={isNumberPositive}>
      {numberValue}
      {props.text}
    </Textwrapper>
  );
};

export default Text;
