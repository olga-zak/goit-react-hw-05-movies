import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const HomeLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: #fff;
  font-size: 1.5em;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: transform 0.5s ease;
  -webkit-transition: transform 0.5s ease;
  &:before {
    position: absolute;
    top: 100%;
    content: 'HOME';
    color: #333;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  &.active {
    color: #333;
  }
`;

export const MoviesLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: #fff;
  font-size: 1.5em;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: transform 0.5s ease;
  -webkit-transition: transform 0.5s ease;
  &:before {
    position: absolute;
    top: 100%;
    content: 'MOVIES';
    color: #333;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  &.active {
    color: #333;
  }
`;

export const Item = styled.li`
  position: relative;
  display: inline-block;
  overflow: hidden;
  &:hover ${HomeLink} {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  &:hover ${MoviesLink} {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
