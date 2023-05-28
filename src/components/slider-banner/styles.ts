import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

export const Wrapper = styled.div`
  ${flex({ gap: '36px' })};
`;

export const SliderWrapper = styled.div`
  position: relative;
  flex: 0 0 540px;
  width: 100%;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  width: 540px;
  transition: all 250ms linear;

  & img {
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
  }
`;

const button = styled.button`
  position: absolute;
  top: 47%;
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

export const PrevButton = styled(button)`
  left: 4%;
`;

export const NextButton = styled(button)`
  right: 4%;
`;

export const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 100%;
  max-width: 290px;
  height: 100px;
  padding: 24px;
  background-color: var(--white);
  transform: translate(-50%, -50%);
`;

const text = styled.p`
  color: var(--dark);
  text-align: center;
  text-transform: uppercase;
`;

export const Subtitle = styled(text)`
  ${font({
    lineHeight: 13,
    size: 12,
    weight: 600,
  })};

  margin-bottom: 14px;
  opacity: 0.4;
`;

export const Title = styled(text)`
  ${font({
    lineHeight: 25,
    size: 22,
    weight: 600,
  })};
`;
