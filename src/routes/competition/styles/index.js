import styled, { css } from 'styled-components';
import { ContainerInner } from '../../../styles/layout-style';

const CompetitionInner = styled(ContainerInner)`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.rankingBg};
`;

const RadioBoxGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const RadioBoxTitle = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

const RadioBoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 20px;
  border: 1px solid #fff;
  line-height: 2rem;
  ${(props) => {
      if (props.scroll) {
          return css`
            scroll-snap-type: x mandatory;
            white-space: nowrap;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
          `;
      }
  }}
  > div {
    width: ${(props) => (props.total ? `${100 / props.total}%` : 'auto')};
    ${(props) => {
      if (props.scroll) {
        return css`
          scroll-snap-align: start;
        `;
      }
    }};
  }
`;

const RadioBoxItem = styled.div`
  border-right: 1px solid #fff;
  text-align: center;
  ${(props) => {
    if (props.selected) {
        return css`
          background-color: #fff;
          color: #121212;
        `;
    }
  }};
  &:last-child {
    border-right: 0;
  } 
`;

const RadioBoxItemImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-image: ${(props) => `url(/assets/images/picture/${props.image}.jpg)`};
  background-repeat: no-repeat;
  background-size: cover;
  opacity: ${(props) => props.selected ? '1' : '.6'};
`;

const FunctionButton = styled.div`
  width: 100%;
  font-size: 1.5rem;
  padding: 10px 20px;
  text-align: center;
  color: ${(props) => props.theme.functionBtnTextColor};
`;

const QRCodeReaderContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0,0,0);
  overflow: auto;
  align-content: flex-start;
  .reader {
    & > section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 66vh !important;
      padding-top: 0 !important;
      & > div {
        border-top: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;
        border-bottom: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;
        box-shadow: inset 0 0 0 5px rgba(255,255,255,.5) !important;
      }
      ${(props) => {
        if (props.legacyMode) {
          return css`
            &:before {
              content: 'Click to open the camera and take a QR code.';
              position: absolute;
            }
          `;
        }
      }};
      img {
        max-width: 100% !important;
        height: auto !important;
      }
    }
  }
`;

const ReaderDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 20px 10px;
  line-height: 1.2rem;
  flex: 1 1 auto;
  align-items: center;
`;

export {
    CompetitionInner,
    RadioBoxGroup,
    RadioBoxTitle,
    RadioBoxContent,
    RadioBoxItem,
    RadioBoxItemImg,
    FunctionButton,
    QRCodeReaderContent,
    ReaderDescription
}
