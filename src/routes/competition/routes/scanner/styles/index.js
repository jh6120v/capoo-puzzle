import styled from 'styled-components';
import { ContainerInner } from '../../../../../styles/layout-style';

const ScannerInner = styled(ContainerInner)`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: ${props => props.theme.rankingBg};
`;

const ScannerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export {
    ScannerInner,
    ScannerContent
}
