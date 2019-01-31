import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:600|Montserrat:400,500');

  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
  }

  h1,h2 {
    font-family: 'Fira Sans', sans-serif;
    letter-spacing: 1px;
    color: #3A3A3A;
    font-weight:600;
  }

  h3,h4,h5,h6,p,span,a,input,label,button,td,th {
    font-family: 'Montserrat', sans-serif;
    color: #3A3A3A;
  }
`;

export default GlobalStyle;
