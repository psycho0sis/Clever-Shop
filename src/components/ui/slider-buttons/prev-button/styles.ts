import styled from 'styled-components';

interface IStyledButton {
  position: {
    top: number;
    left: number;
  };
}

export const StyledPrevButton = styled.button.withConfig({
  shouldForwardProp: (propName) => propName !== 'position',
})<IStyledButton>`
  position: absolute;
  top: ${({ position }) => position.top}%;
  left: ${({ position }) => position.left}%;
  z-index: 2;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 50%;
  transition: 0.5s all ease;

  &:active {
    box-shadow: 4px 4px 24px 0 rgb(34 60 80 / 20%);
  }

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;
