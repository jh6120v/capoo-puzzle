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

const PreviewWrap = styled.div`
  width: 100%;
  background-image: url(${bg_1});
  background-size: contain;
  background-repeat: no-repeat;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const GridWrap = styled.div`
  position: relative;
  width: ${(props) => props.size ? props.size + 'px' : '288px'};
  height: ${(props) => props.size ? props.size + 'px' : '288px'};
`;

const Grid = styled.div`
  position: absolute;
  left: ${(props) => (props.pos.x / props.cols) * 100 + '%'};
  top: ${(props) => (props.pos.y / props.cols) * 100 + '%'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size ? props.size + 'px' : '20px'};
  height: ${(props) => props.size ? props.size + 'px' : '20px'};
`;

const GridInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const GridEmpty = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  b
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
  left: -${(props) => (props.pos.x / props.cols) * props.size + 'px'};
  top: -${(props) => (props.pos.y / props.cols) * props.size + 'px'};
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
  background-image: url(${bg_1});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Functions = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export {
    Points,
    PuzzleContainer,
    PreviewWrap,
    GridWrap,
    Grid,
    GridInner,
    GridInnerText,
    GridInnerImg,
    Functions
};
