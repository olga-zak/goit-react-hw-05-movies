import styled from 'styled-components';

export const List = styled.ul``;

export const Item = styled.li`
  font-size: 1.1em;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Author = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;
