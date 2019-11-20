import styled, { css } from 'styled-components';
import puzzle_1 from '../../../assets/images/puzzle-1.jpg';
import puzzle_2 from '../../../assets/images/puzzle-2.jpg';
import puzzle_3 from '../../../assets/images/puzzle-3.jpg';
import puzzle_4 from '../../../assets/images/puzzle-4.jpg';
import puzzle_5 from '../../../assets/images/puzzle-5.jpg';
import puzzle_6 from '../../../assets/images/puzzle-6.jpg';
import puzzle_7 from '../../../assets/images/puzzle-7.jpg';
import puzzle_8 from '../../../assets/images/puzzle-8.jpg';
import puzzle_9 from '../../../assets/images/puzzle-9.jpg';
import puzzle_10 from '../../../assets/images/puzzle-10.jpg';

const Points = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;

const Times = styled(Points)``;

const PuzzleContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
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
  width: ${(props) => props.width ? props.width + 'px' : '100px'};
  background-size: ${(props) => css`${props.totalWidth}px ${props.totalWidth}px`};
  background-repeat: no-repeat;
  background-position: ${(props) => css`-${props.position.x}px -${props.position.y}px`};
  opacity: ${(props) => (props.isSpace ? '.1' : '1')};
  z-index: ${(props) => props.isSpace ? '0' : '1'};
  &.puzzle-1 {
    background-image: url(${puzzle_1});
  }
  &.puzzle-2 {
    background-image: url(${puzzle_2});
  }
  &.puzzle-3 {
    background-image: url(${puzzle_3});
  }
  &.puzzle-4 {
    background-image: url(${puzzle_4});
  }
  &.puzzle-5 {
    background-image: url(${puzzle_5});
  }
  &.puzzle-6 {
    background-image: url(${puzzle_6});
  }
  &.puzzle-7 {
    background-image: url(${puzzle_7});
  }
  &.puzzle-8 {
    background-image: url(${puzzle_8});
  }
  &.puzzle-9 {
    background-image: url(${puzzle_9});
  }
  &.puzzle-10 {
    background-image: url(${puzzle_10});
  }
  &:after {
    content: '';
    padding-top: 100%;
  }
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
    Functions
};
