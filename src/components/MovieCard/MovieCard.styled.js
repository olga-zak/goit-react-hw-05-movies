import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCardWrapper = styled.div`
  position: relative;
  width: 800px;
  min-height: 250px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
`;

export const MovieHeader = styled.div`
  padding: 25px;
  height: 40%;
`;

export const MainHeader = styled.h1`
  margin-bottom: 10px;
  color: black;
  font-weight: 600;
`;

export const Score = styled.span`
  font-weight: 500;
  font-size: 1.1em;
`;

export const Image = styled.img`
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

export const Genres = styled.ul`
  display: flex;
  margin-top: 30px;
  font-weight: 500;
  color: #141313;
`;
export const ListItem = styled.li`
  margin-right: 5px;
  &:not(:last-child):after {
    content: ',';
  }
`;

export const Overview = styled.p`
  padding: 25px;
  height: 50%;
  font-size: 17px;
  font-weight: 500;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  transition: 0.4s;
  &:hover {
    color: #333;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
  background-image: url(${props => props.someUrl});
  background-repeat: no-repeat;
  opacity: 0.3;
  background-position: 50% 50%;
`;

export const AdditionalInfo = styled.ul`
  position: relative;
  z-index: 5;

  height: 10%;
  padding: 25px;
`;
export const AdditionalInfoItem = styled.li`
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
  &:hover {
    transition: color 0.3s;
    color: rgba(0, 0, 0, 0.7);
  }
`;
