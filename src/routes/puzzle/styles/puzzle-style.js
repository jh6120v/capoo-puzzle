import styled, { css } from 'styled-components';
import bg_1 from '../../../assets/images/puzzle-bg-1.jpg';

const Points = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;

const Times = styled(Points)``;

const PuzzleContainer = styled.div`
  width: 288px;
  margin: 0 auto;
`;

const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: ${(props) => props.width ? props.width + 'px' : '288px'};
  &:after {
    content: '';
    padding-bottom: 100%;
  }
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
  z-index: 4;
`;

const Grid = styled.div`
  position: absolute;
  cursor: pointer;
  transition: all .2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width ? props.width + 'px' : '96px'};
  background-image: url(${bg_1});
  background-size: ${(props) => css`${props.totalWidth}px ${props.totalWidth}px`};
  background-repeat: no-repeat;
  background-position: ${(props) => css`-${props.position.x}px -${props.position.y}px`};
  opacity: ${(props) => (props.isSpace ? '.1' : '1')};
  z-index: ${(props) => props.isSpace ? '0' : '1'};
  &:after {
    content: '';
    padding-top: 100%;
  }
`;

const GridInnerImg = styled.div`
  position: absolute;
  left: -${(props) => props.pos[0] + 'px'};
  top: -${(props) => props.pos[1] + 'px'};
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
  opacity: ${(props) => (props.isSpace ? '.1' : '1')};
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
    Points, Times,
    PuzzleContainer,
    GridWrap,
    Grid,
    GridInner,
    GridInnerText,
    GridInnerImg,
    Functions
};
