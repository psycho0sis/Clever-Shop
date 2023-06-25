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

export const SliderContent = styled.div`
  display: flex;
  width: 540px;
  transition: all 250ms linear;

  & img {
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
  }
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
