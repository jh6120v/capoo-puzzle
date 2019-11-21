import styled, { css } from 'styled-components';
import { FlipCard, FlipCardBack, FlipCardFront } from '../../../styles/flip-card';

const RatingWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 300px;
  margin: 15px auto;
  justify-content: center;
`;

const RatingItem = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: ${(props) => props.theme.ratingTextColor};
  font-size: 1.5rem;
`;

const Times = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CountDownTips = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .3);
  font-size: 10rem;
  z-index: 999;
`;

const PuzzleContainer = styled(FlipCard)`
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

const PuzzleFront = styled(FlipCardFront)`
  z-index: 1;
  background-image: ${(props) => `url(/assets/images/picture/${props.image}.jpg)`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const PuzzleBack = styled(FlipCardBack)`
  z-index: 1;
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
  background-image: ${(props) => `url(/assets/images/picture/${props.image}.jpg)`};
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

const Functions = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 15px 0;
`;

const FunctionButton = styled.div`
  font-size: 1.2rem;
  padding: 10px 20px;
  color: ${(props) => props.theme.functionBtnTextColor};
`;

export {
    RatingWrap, RatingItem,
    Times, CountDownTips,
    PuzzleContainer, PuzzleFront, PuzzleBack,
    GridWrap,
    Grid,
    GridInner,
    GridInnerText,
    Functions, FunctionButton
};
