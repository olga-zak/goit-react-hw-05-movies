import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  color: blueviolet;

  &.active {
    color: aquamarine;
    font-size: 20px;
    font-weight: 900;
  }
`;
