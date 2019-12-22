import styled from 'styled-components';

const ModelShadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(4,4,15,.4);
  z-index: 10;
`;

const ModelWrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 270px;
  max-width: 72%;
  background-color: rgb(248, 248, 248);
  z-index: 11;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 14px;
`;

const ModelTitle = styled.div`
  width: 100%;
  padding: 19px 16px 0 16px;
  color: #000;
  font-size: 17px;
  text-align: center;
  letter-spacing: -.41px;
  line-height: 22px;
`;

const ModelContent = styled.div`
  width: 100%;
  padding: 0 16px 24px 16px;
  color: #000;
  font-size: 13px;
  text-align: center;
  line-height: 18px;
  letter-spacing: -.08px;
  font-weight: 300;
`;

const ModelFooter = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  border-top: .5px solid rgba(4, 4, 15, .4);
`;

const Button = styled.div`
  width: 100%;
  text-align: center;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -.41px;
  border-right: .5px solid rgba(4, 4, 15, .4);
  padding: 11.5px 0 10px 0;
  &:last-child:not(:first-child) {
    border-right: none;
  }
  color: ${(props) => (props.type === 'confirm' ? '#007aff' : '#8e8e93')};
`;

export {
    ModelShadow,
    ModelWrap,
    ModelTitle,
    ModelContent,
    ModelFooter,
    Button
};