import { createGlobalStyle } from 'styled-components';
// import { invoiceStyle } from './components/Invoice/style';
// import {
//   dropZoneStyle,
//   uploadMainStyle,
//   uploadProgressStyle,
//   uploadStyle,
// } from './screens/Upload';
/* eslint no-unused-expressions: 0 */
const GlobalStyle = createGlobalStyle`
/* ${invoiceStyle}
${dropZoneStyle}
${uploadMainStyle}
${uploadProgressStyle}
${uploadStyle} */
  html,
  body {
    height: 100%;
    width: 100%;
    
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p, label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    margin-bottom: 2px;
    margin-top: 2px;
  }
  .container {
    margin-top: 100px;
  }
`;
export default GlobalStyle;