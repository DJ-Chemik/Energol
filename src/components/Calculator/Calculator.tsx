import React, { useState } from 'react';
import NumberInput from '../UI/NumberInput/NumberInput';
import Text from '../UI/Text/Text';
import { Wrapper } from './Calculator.styled';

const MODIFIER = 0.8;

const Calculator = () => {
  const [production1, setProduction1] = useState<number>(0);
  const [production2, setProduction2] = useState<number>(0);
  const [consumption1, setConsumption1] = useState<number>(0);
  const [consumption2, setConsumption2] = useState<number>(0);

  const handleChangeProduction1 = (value: number) => {
    setProduction1(value);
  };
  const handleChangeProduction2 = (value: number) => {
    setProduction2(value);
  };
  const handleChangeConsumption1 = (value: number) => {
    setConsumption1(value);
  };
  const handleChangeConsumption2 = (value: number) => {
    setConsumption2(value);
  };

  const sumOfProduction = production1 + production2;
  const sumOfConsumption = consumption1 + consumption2;
  const modifiedProduction1 = production1 * MODIFIER;
  const modifiedProduction2 = production2 * MODIFIER;
  const modifiedSumOfProduction = sumOfProduction * MODIFIER;
  const left1 = modifiedProduction1 - consumption1;
  const left2 = modifiedProduction2 - consumption2;
  const leftTotal = modifiedSumOfProduction - sumOfConsumption;

  return (
    <Wrapper>
      {/* Row 1 */}
      <Text />
      <Text text="Produkcja" />
      <Text text="Produkcja x 0.8" />
      <Text text="Zużycie" />
      <Text text="Ile zostało" />
      {/* Row 2 */}
      <Text text="Taryfa 1" />
      <NumberInput onChange={handleChangeProduction1} />
      <Text number={modifiedProduction1} />
      <NumberInput onChange={handleChangeConsumption1} />
      <Text number={left1} />
      {/* Row 3 */}
      <Text text="Taryfa 2" />
      <NumberInput onChange={handleChangeProduction2}/>
      <Text number={modifiedProduction2} />
      <NumberInput onChange={handleChangeConsumption2}/>
      <Text number={left2} />
      {/* Row 4 */}
      <Text text="Suma" />
      <Text number={sumOfProduction} />
      <Text number={modifiedSumOfProduction} />
      <Text number={sumOfConsumption} color='red' />
      <Text number={leftTotal} />
    </Wrapper>
  );
};

export default Calculator;
