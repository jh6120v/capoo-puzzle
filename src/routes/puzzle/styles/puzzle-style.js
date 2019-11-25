import styled, { css } from 'styled-components';
import { FlipCard, FlipCardBack, FlipCardFront } from '../../../styles/flip-card';
import { ContainerInner } from '../../../styles/layout-style';

const PuzzleInner = styled(ContainerInner)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const PersonalRecordWrap = styled.div`
  width: 300px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-wrap: nowrap;
`;

const PersonalRecordTitle = styled.div`
  width: 23%;
  align-self: flex-end;
  font-size: 2rem;
`;

const PersonalRecordInner = styled.div`
  width: 77%;
  display: flex;
  justify-content: space-between;
`;

const PersonalRecordItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
`;

const PersonalRecordItemTitle = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 2px;
  text-align: center;
  color: ${(props) => props.theme.personalRecordItemTitleTextColor};
  text-transform: uppercase;
`;

const PersonalRecordItemContent = styled.div`
  padding: 10px 8px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.personalRecordItemContentBg};
  color: ${(props) => props.theme.personalRecordItemContentTextColor};
  font-size: .9rem;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

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
  color: #fff;
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
  border-radius: 10px;
  overflow: hidden;
`;

const PuzzleBack = styled(FlipCardBack)`
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
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
  font-size: 1.5rem;
  padding: 10px 20px;
  color: ${(props) => props.theme.functionBtnTextColor};
`;

export {
    PuzzleInner,
    PersonalRecordWrap, PersonalRecordTitle, PersonalRecordInner, PersonalRecordItem, PersonalRecordItemTitle, PersonalRecordItemContent,
    RatingWrap, RatingItem,
    Times, CountDownTips,
    PuzzleContainer, PuzzleFront, PuzzleBack,
    GridWrap,
    Grid,
    Functions, FunctionButton
};
