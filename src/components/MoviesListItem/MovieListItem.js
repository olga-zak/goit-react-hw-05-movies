import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  width: 210px;
  background-color: #496785;
  border-radius: 5px;
  transition: 0.4s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Img = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Text = styled.p`
  padding: 10px;
  color: #fff;
`;

export const LinkText = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
