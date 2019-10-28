import styled from 'styled-components';

const GridContainer = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Grid = styled.div`
  //position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ? props.width + 'px' : '20px'};
  height: ${(props) => props.height ? props.height + 'px' : '20px'};
`;

export {
  GridContainer,
  Grid
};