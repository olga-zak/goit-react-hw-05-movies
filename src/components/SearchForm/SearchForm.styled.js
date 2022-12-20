import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  height: 40px;
  margin: 0 auto 20px auto;
  background: #496785;
  border: 1px solid rgba(0, 255, 117, 0.3);
  border-radius: 5px;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }
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
