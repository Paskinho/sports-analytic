import {Button} from "../../components/ui/button";
import s from "./styles.module.scss"
import {Typography} from "../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {


}


const StyledHeader = styled.header`
  height: 70px;
  box-shadow: 1px 2px 1px 1px lightgray;
  background-color: rgb(255, 44, 0);
  grid-area: header;
  display: flex;
  width: 1500px;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;`


const StyledNav = styled.nav `
  display: flex;
  width: 450px;
  justify-content: space-around;
  align-content: start;
`
