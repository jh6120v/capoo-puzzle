import styled, { keyframes, css } from 'styled-components';

const itemBackgroundShow = (props) => keyframes`
  from {
    background-color: ${props.theme.settingItemBg};
  }
  to {
    background-color: ${props.theme.settingItemInActiveBg};
  }
`;

const SettingWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.settingBg};
  padding-top: 44px;
`;

const SettingItem = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.settingItemBorderColor};
  color: ${(props) => props.theme.settingItemTextColor};
  line-height: 1.5rem;
  padding: 10px 15px;
  font-size: 1.2rem;
  text-transform: capitalize;
  cursor: pointer;
  flex-wrap: wrap;
  & path {
    fill: ${props => props.theme.settingItemIconColor};
  }
  ${(props) => (props.alignItemsCenter ? css`align-items: center;` : '')}
  ${(props) => {
        if (props.isTitle) {
            return css`
              padding-top: 20px;
              padding-bottom: 5px;
              font-size: 1rem;
              font-weight: bold;
            `;
        }

        if (props.isSpace) {
            return css`
              padding: 5px 0;
            `;
        }

        return css`
          background-color: ${(props) => props.theme.settingItemBg};
          justify-content: ${props.justifyContentSpaceAround ? 'space-around' : 'space-between'};
          ${!props.noActive ? css`
              &:active {
                animation: ${(props) => itemBackgroundShow(props)} .1s ease-in;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
              }
          ` : ''}
        `;
    }}
`;

const SettingItemImage = styled.div`
  width: 50px;
  height: 50px;
  background-image: ${(props) => `url(/assets/images/picture/${props.image}.jpg)`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const UserInfo = styled.div`

`;

const Version = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.versionTextColor};
  font-size: .9rem;
  padding: 20px 0;
`;

export {
    SettingWrap, SettingItem, SettingItemImage,
    Version
};
