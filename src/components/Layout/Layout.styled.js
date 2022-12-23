import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 70px;
  z-index: 1;
  background-color: #5689b8;
  border-bottom: 2px solid rgba(0, 255, 117, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 30px;
  background-image: linear-gradient(
    to bottom,
    rgba(86, 137, 184, 1) 2%,
    rgba(55, 59, 68, 0.5)
  );
`;
