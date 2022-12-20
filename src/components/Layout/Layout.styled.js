import styled from 'styled-components';

export const HeaderS = styled.header`
  width: 100%;
  height: 70px;
  z-index: 1;
  background-color: #5689b8;
  //border-bottom: 1px solid #496785;
  border-bottom: 1px solid rgba(0, 255, 117, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px;
  //background-image: linear-gradient(to right, #373b44, #4286f4);
  background-image: linear-gradient(to bottom, #5689b8 10%, #373b44);
`;
