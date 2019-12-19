import styled from 'styled-components';
import qrCode from '../../../../../assets/images/qrcode.png';

const AboutContent = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.2rem;
`;

const AppName = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
`;

const AppQrCode = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${qrCode});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;

export {
    AboutContent,
    AppName,
    AppQrCode
};
