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
    font-family: 'Poppins', sans-serif;
    display: flex;
    place-items: start;
    min-width: 320px;
    min-height: 100vh;
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
  
`