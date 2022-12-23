import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  width: 210px;
  background-color: #496785;
  border-radius: 5px;
  transition: 0.4s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
  &:active {
    box-shadow: 0px 0px 12px 0px rgba(225, 225, 225, 1);
  }
`;

export const Img = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Text = styled.p`
  padding: 10px;
  // color: #fff;
`;

export const LinkText = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  transition: 0.4s;
  &:hover {
    color: #333;
  }
`;
