import {Button} from "../../components/ui/button";
import s from "./styles.module.scss"
import {Typography} from "../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {PersonalInformation} from "../../features/profile/personal-information";


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
        return navigate ("Profile")
    }


    return (
        <StyledHeader>

            <StyledNav>
                <Logo/>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToHome}>Home</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToPlayers}>Players</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToTeams}>Teams</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToStatistics}>Statistics</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToSubscription}>Subscription</Typography>
            </StyledNav>
            <div className={s.button}>
                {isAuth && (
                    <img />
                )}
                <Button variant={"primary"} onClick={navToLogin}>Sign In</Button>
                <img alt={"Profile logo"}
                     src={"https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg"}
                     onClick={navToProfile}/>

            </div>
        </StyledHeader>
    )
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