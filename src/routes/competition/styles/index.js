import styled from 'styled-components';
import { ContainerInner } from '../../../styles/layout-style';

const CompetitionInner = styled(ContainerInner)`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: ${props => props.theme.rankingBg};
`;

const QRCodeReaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.75);
  .reader {
    & > section {
      height: 66vh !important;
      padding-top: 0 !important;
      & > div {
        border-top: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;
        border-bottom: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;
        box-shadow: inset 0 0 0 5px rgba(255,255,255,.5) !important;
       
      }
    }
  }
`;

const ReaderDescription = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 20px 10px;
`;

// const Reader

export {
    CompetitionInner,
    QRCodeReaderContent,
    ReaderDescription
}
