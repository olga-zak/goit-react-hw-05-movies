import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  padding: 5px;
  cursor: pointer;
  height: 40px;
  min-width: 120px;
  font-size: 1.1em;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background: #496785;
  border-radius: 5px;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
    transform: scale(1.02);
    /* background: #fff;
    color: #333; */
  }
  &:active {
    box-shadow: 0px 0px 12px 0px rgba(225, 225, 225, 1);
  }
  &:focus {
    outline: 0;
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
`;
