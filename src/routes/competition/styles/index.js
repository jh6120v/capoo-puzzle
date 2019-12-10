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
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
`;

export {
    CompetitionInner,
    QRCodeContent
}
