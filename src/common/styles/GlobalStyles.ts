import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  body {
    margin: 0;
    display: flex;
    place-items: start;
    min-width: 320px;
    min-height: 100vh;
  }
`