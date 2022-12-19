import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  height: 40px;
  margin: 90px auto 15px auto;
  background: #5689b8;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 370px;
  padding: 12px 10px;
  float: left;
  color: #333;
  border: 0;
  background: transparent;
  border-radius: 3px 0 0 3px;
  &:focus {
    outline: 0;
    background: transparent;
  }
`;

export const Button = styled.button`
  position: relative;
  float: right;
  border: 0;
  padding: 0;
  cursor: pointer;
  height: 40px;
  width: 120px;
  font-size: 1.1em;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background: transparent;
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
