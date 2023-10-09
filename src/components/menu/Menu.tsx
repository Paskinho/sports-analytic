import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {Logo} from "../logo/Logo";
import s from "../../layout/header/styles.module.scss";
import styled from "styled-components";
import {Button} from "../ui/button";
import {Typography} from "../ui/typography";

type MenuProps = {
    name: string,
    menuItems: Array<string>
}

export const Menu = (props: MenuProps) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()



    return (
<div>
            <StyledNav>
                <Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems}</Typography>
                <Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems}</Typography>
                <Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems}</Typography>
                <Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems}</Typography>
                <Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems}</Typography>
            </StyledNav>

</div>

    )
};

const StyledNav = styled.nav`
  display: flex;
  width: 450px;
  justify-content: space-around;
  align-content: start;
  `