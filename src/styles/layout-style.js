import styled from 'styled-components';
import { respondTo } from './_mixin';

const Wrapper = styled.div`
  display: flex;
  max-width: 400px;
  min-height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0;
  ${respondTo.xs`
    margin: 0 auto;
  `}
`;

const HeaderStyle = styled.header`
  width: 100%;
  height: calc(44px + env(safe-area-inset-top));
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.headerTextColor};
  padding: env(safe-area-inset-top) 5px 0 5px;
  overflow: hidden;
  background-color: ${props => props.theme.headerBg};
  z-index: 3;
  ${respondTo.xs`
    left: 50%;
    width: 400px;
    margin-left: -200px;
  `}
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const PrevLink = styled.div`
  min-width: 25px;
  height: 25px;
`;

const NextLink = styled(PrevLink)``;

const PrevLinkItem = styled.div`
  z-index: 3;
  color: #fff;
  font-size: 25px;
  font-family: sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in;
  padding-left: 3px;
`;

const NextLinkItem = styled.div`
  z-index: 3;
  transition: all 0.2s ease-in;
  padding-right: 3px;
  a {
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

const ContainerInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.containerBg};
  padding-top: 44px;
`;

export {
    Wrapper,
    HeaderStyle,
    Title,
    PrevLink, PrevLinkItem,
    NextLink, NextLinkItem,
    Container,
    ContainerInner
};
