import styled from 'styled-components';
import { ContainerInner } from '../../../styles/layout-style';

const CompetitionInner = styled(ContainerInner)`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: ${props => props.theme.rankingBg};
`;

const QRCodeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.rankingBg};
  .aaa {
    & > section {
      height: 66vh !important;
      padding-top: 0 !important;
      & > div {
        border-top: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;
        border-bottom: calc((66vh - calc(100vw - 100px)) / 2) solid rgba(0, 0, 0, 0.3) !important;
        box-shadow: none !important;
      }
    }
  }
`;

export {
    CompetitionInner,
    QRCodeContent
}
