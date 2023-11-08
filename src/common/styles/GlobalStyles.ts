import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme"

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
    font-family: 'Poppins', sans-serif;
    display: flex;
    place-items: start;
    min-width: 320px;
    min-height: 100vh;
    color: ${theme.colors.font}
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none
  }
  
  section:nth-of-type(odd) {
  background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(event) {
    background-color: ${theme.colors.secondaryBg};
  }
  
`