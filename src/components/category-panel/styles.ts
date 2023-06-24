import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

export const CategoryPanelWrapper = styled.div`
  ${flex({ alignment: 'center', gap: '30px', justify: 'space-between' })};

  margin-top: 96px;
  margin-bottom: 48px;
  text-transform: uppercase;
`;

export const Category = styled.div`
  ${font({ size: 22, lineHeight: 25, weight: 600 })};
`;

export const Filters = styled.div`
  ${flex({ alignment: 'center', gap: '30px', justify: 'space-between' })};
`;

export const Filter = styled.div`
  ${font({ size: 12, lineHeight: 13, weight: 400 })};
`;
