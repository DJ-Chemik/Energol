import React from 'react';
import { NumberInputWrapper } from './NumberInput.styled';

interface NumberInputProps {
  onChange: (value: number) => void;
}

const NumberInput = (props: NumberInputProps) => {

  const handleChange = (event: any) => {
    if (Number.isNaN(event.target.value)) {
      props.onChange(0);  
    }
    props.onChange(Number(event.target.value));
  };

  return (
    <NumberInputWrapper>
      <input
        style={{
          width: "100%",
          fontSize: "1.5rem",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
        type="number"
        onChange={handleChange}
      />
    </NumberInputWrapper>
  );
};

export default NumberInput;
