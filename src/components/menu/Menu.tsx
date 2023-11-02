import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {Logo} from "../logo/Logo";
import s from "../../layout/header/styles.module.scss";
import styled from "styled-components";
import {Button} from "../ui/button";
import {Typography} from "../ui/typography";

type MenuProps = {
    menuItems: Array<string>
}

export const Menu = (props: MenuProps) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()



    return (
<div>
            <StyledNav>
                {/*<Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems[0]}</Typography>*/}
                {/*<Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems[1]}</Typography>*/}
                {/*<Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems[2]}</Typography>*/}
                {/*<Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems[3]}</Typography>*/}
                {/*<Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems[4]}</Typography>*/}
                {/*<Typography variant={'subtitle1'} color={'inherit'}>{props.menuItems[5]}</Typography>*/}
                <Typography className={s.typography} variant={'subtitle1'} color={'inherit'}>{props.menuItems.map((item, index)=> {
                    return <Typography key={index} variant={'subtitle1'} color={'inherit'}>{item}</Typography>
                })}</Typography>
            </StyledNav>

</div>

    )
};

const StyledNav = styled.nav`
  display: flex;
  width: 100vh;
  justify-content: space-around;
  align-content: start;
  `