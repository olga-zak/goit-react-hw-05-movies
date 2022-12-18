import styled from 'styled-components';
//import { Link } from 'react-router-dom';

//may be transition is not needed?
export const MovieCardWrapper = styled.div`
  position: relative;
  //display: block;
  width: 800px;
  min-height: 250px;
  margin: 20px auto;
  //overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
`;

export const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
`;

export const MovieHeader = styled.div`
  //position: relative;
  padding: 25px;
  height: 40%;
`;

export const MainHeader = styled.h1`
  margin-bottom: 15px;
  color: black;
  font-weight: 400;
`;

export const SubHeader = styled.h4`
  color: #555;
  font-weight: 400;
`;

export const Score = styled.span`
  /* display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05); */
`;

export const Image = styled.img`
  //position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

export const Genres = styled.ul`
  display: flex;
  margin-top: 15px;
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
  color: black;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;

  height: 100%;
  width: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;

  background-image: url(${props => props.someUrl});
  background-repeat: no-repeat;
  opacity: 0.3;
  background-position: 50% 50%;
  // background: #ada996; /* fallback for old browsers */
  // background: -webkit-linear-gradient(
  //   to right,
  //   #eaeaea,
  //   #dbdbdb,
  //   #f2f2f2,
  //   #ada996
  // ); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(
  //   to right,
  //   #eaeaea,
  //   #dbdbdb,
  //   #f2f2f2,
  //   #ada996
  // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  //background-image: url('https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg');
`;

export const AdditionalInfo = styled.ul`
  height: 10%;
  //padding-left: 15px;
  //padding-bottom: 20px;
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

// export const AdditionalInfoText = styled(Link)`
//   font-size: 19px;
//   cursor: pointer;
// `;
