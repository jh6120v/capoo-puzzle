import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    //padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    position: fixed;
  }
  html, body {
    width: 100%;
    height: calc(100% + env(safe-area-inset-top));
    font-display: optional;
    font-size: 16px;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.background};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    font-family: 'VT323', monospace;
  }
  #app {
    display: flex;
    height: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
