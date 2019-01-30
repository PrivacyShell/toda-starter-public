import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }

  body {
    margin: 0;
  }

  h1,h2 {
    letter-spacing: 1px;
    color: #3A3A3A;
  }

  h3,h4,h5,h6,p,span,a,input,label,button,td,th {
    color: #3A3A3A;
  }
`;

export default GlobalStyle;
