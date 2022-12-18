import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  width: 210px;
  transition: 0.4s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Img = styled.img`
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const Text = styled.p`
  margin-bottom: 5px;
`;

export const LinkText = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
