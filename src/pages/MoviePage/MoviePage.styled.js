import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 10px;
  text-align: center;
  border: 0;
  padding: 0;
  cursor: pointer;
  height: 40px;
  width: 120px;
  font-size: 1.1em;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background: #5689b8;
  border-left: 1px solid #fff;
  border-radius: 0 3px 3px 0;
  &:hover {
    background: #fff;
    color: #333;
  }
  &:active {
    box-shadow: 0px 0px 12px 0px rgba(225, 225, 225, 1);
  }
  &:focus {
    outline: 0;
  }
`;
