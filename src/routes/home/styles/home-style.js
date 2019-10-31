import styled from 'styled-components';
import bg_1 from '../../../assets/images/puzzle-bg-1.jpg';

const Points = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;

const PuzzleContainer = styled.div`
  width: 288px;
  margin: 0 auto;
`;

const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: ${(props) => props.size ? props.size + 'px' : '288px'};
  height: ${(props) => props.size ? props.size + 'px' : '288px'};
`;

const Grid = styled.div`
  position: absolute;
  cursor: pointer;
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size ? props.size + 'px' : '96px'};
  height: ${(props) => props.size ? props.size + 'px' : '96px'};
  z-index: ${(props) => props.isSpace ? '0' : '1'};
`;

const GridInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const GridInnerText = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const GridInnerImg = styled.div`
  position: absolute;
  left: -${(props) => props.pos[0]  + 'px'};
  top: -${(props) => props.pos[1] + 'px'};
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
  opacity: ${(props) => (props.isSpace ? '.2' : '1')};
  background-image: url(${bg_1});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 3;
`;

const Functions = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export {
    Points,
    PuzzleContainer,
    GridWrap,
    Grid,
    GridInner,
    GridInnerText,
    GridInnerImg,
    Functions
};
