import {Button} from "../../components/ui/button";
import s from "./styles.module.scss"
import {Typography} from "../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Dropdown, DropdownItem, DropdownItemWithIcon} from "../../components/ui/dropdown";
import PersonalOutline from "../../assets/icons/personalOutline";
import Logout from '../../assets/icons/logout'
import Profile from "../../assets/images/Profile.png"
import {Container} from "../../common/styles/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import Star from '../../assets/icons/star'
import React, {useState} from "react";
import {useGetMeQuery} from "../../services/auth/auth";

type HeaderProps = {
    isAuth: boolean
    userInfo?: {
        name: string
        avatar?: string
        email: string
    } | null
}


export const Header = ({isAuth, userInfo}: HeaderProps) => {

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

    const navToProfile = () => {
        return navigate("Profile")
    }

    const handleNameChanged = useHandleThemeChanged()

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} direction={'row'}>
                    <StyledNav>
                        <Button className={s.buttonHeader} variant={'primary'} onClick={handleNameChanged}>
                            Change theme
                        </Button>
                        <Logo onClick={navToHome}/>
                        <Typography variant={'subtitle1'} color={'inherit'} onClick={navToHome} classname={s.headerText}>Home</Typography>

                        <Dropdown trigger={<button>
                            <Typography variant={'subtitle1'} color={'inherit'} onClick={navToPlayers}>Players</Typography>

                        </button>}>
                            <div className={s.dropdownContainer}>
                            <DropdownItem>
                                <div className={s.dropdownItems}>
                                <Typography variant={'subtitle1'} onClick={navToPlayers}>ALl players</Typography>
                                <Typography variant={'subtitle1'}>Europe</Typography>
                                <Typography variant={'subtitle1'}>South America</Typography>
                                <Typography variant={'subtitle1'}>Asia</Typography>
                                <Typography variant={'subtitle1'}>Africa</Typography>
                                <Typography variant={'subtitle1'}>North America</Typography>
                                </div>
                            </DropdownItem>
                            </div>
                        </Dropdown>
                        <Typography variant={'subtitle1'} color={'inherit'} onClick={navToTeams}>Teams</Typography>
                        <Typography variant={'subtitle1'} color={'inherit'}
                                    onClick={navToStatistics}>Statistics</Typography>
                        <Typography variant={'subtitle1'} color={'inherit'}
                                    onClick={navToSubscription}>Subscription</Typography>

                    <div className={s.button}>
                        <Button variant={"primary"} onClick={navToLogin}>Sign In</Button>

                    </div>
                    {/*{isAuth && (*/}
                    <Dropdown trigger={<button>
                        <Typography variant='subtitle1' >
                            {userInfo?.name}
                            Uladzislau
                        </Typography>
                    </button>}
                              className={s.dropdown}
                    >
                        <img alt={"Profile logo"}
                             src={Profile}
                             className={s.imgHeader}/>
                        {/*onClick={navToProfile}/>*/}
                        <DropdownItem>
                            <div className={s.dropdownContainer}>
                                {/*<img alt={"Profile logo"}*/}
                                {/*     src={Profile}*/}
                                {/*className={s.imgHeader}*/}
                                {/*/>*/}
                                <div className={s.dropdownItems}>
                                    <Typography variant={'subtitle2'}>{userInfo?.name}Uladzislau</Typography>
                                    <Typography variant={'subtitle2'}>{userInfo?.email}v.paskanov@gmail.com</Typography>
                                </div>
                            </div>
                        </DropdownItem>
                        <DropdownItemWithIcon
                            icon={<PersonalOutline/>}
                            text={"Profile"}
                            onSelect={() => navigate('/profile')}
                            className={s.userInfoContainer}
                        />
                        <DropdownItemWithIcon
                            icon={<Star/>}
                            text={"Favorite players"}
                            onSelect={() => navigate('/favoritePlayers')}
                            className={s.userInfoContainer}
                        />
                        <DropdownItemWithIcon className={s.userInfoContainer} icon={<Logout/>} text={"Sign out"}
                            // onSelect={onSignOut}
                        />
                    </Dropdown>
                    </StyledNav>
                </FlexWrapper>
            </Container>
            {/*{!isAuth && <Button variant="primary">Sign In</Button>}*/}
        </StyledHeader>
    )
}

function useHandleThemeChanged () {
    const [state, setState] = useState(false)

    return () => {
        document.body.classList.toggle('dark-mode', state)
        setState(!state)
    }
}

const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 1px 2px 1px 1px lightgray;
  background-color:#004369;
  grid-area: header;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
`

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-content: start;
  align-items: center;

`