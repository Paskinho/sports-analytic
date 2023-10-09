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

    const navToHome = () => {
        return navigate('/Main')
    }

    const navToPlayers = () => {
        return navigate('/Players')
    }

    const navToTeams = () => {
        return navigate('/Teams')
    }

    const navToStatistics = () => {
        return navigate('/Statistics')
    }

    const navToSubscription = () => {
        return navigate('/Subscription')
    }

    const navToLogin = () => {
        return navigate('Login')
    }


    return (
<div>
            <StyledNav>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToHome}>Home</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToPlayers}>Players</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToTeams}>Teams</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToStatistics}>Statistics</Typography>
                <Typography variant={'subtitle1'} color={'inherit'}
                            onClick={navToSubscription}>Subscription</Typography>
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