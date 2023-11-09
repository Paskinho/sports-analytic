import styled from "styled-components";
import {theme} from "../common/styles/Theme";

export const StatsTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  position: relative;
  margin-bottom: 50px;
  //font-family: 'Josefin-Sans', sans-serif;
  
  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
    
  }
`