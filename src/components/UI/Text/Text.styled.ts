import styled, { css } from "styled-components";

export const Textwrapper = styled.div<{isNumberPositive: boolean | null}>`
  border: 1px solid white;

  ${({isNumberPositive}) => isNumberPositive && css`
    background: #21CA80;
  `}

  ${({isNumberPositive}) => isNumberPositive === false && css`
    background: #CC2233;
  `}
`;