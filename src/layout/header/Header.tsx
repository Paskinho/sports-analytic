import {Button} from "../../components/ui/button";
import s from "./styles.module.scss"
import {Typography} from "../../components/ui/typography";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import styled from "styled-components";

export const Header = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const navToHome = () => {
        return navigate('/Home')
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


    return (
        <StyledHeader>
            <div className={s.typography}>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToHome}>Home</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToPlayers}>Players</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToTeams}>Teams</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToStatistics}>Statistics</Typography>
                <Typography variant={'subtitle1'} color={'inherit'} onClick={navToSubscription}>Subscription</Typography>
            </div>
            <div className={s.button}>
                <Button variant={"primary"}>Sign In</Button>
            </div>
        </StyledHeader>
    )
}


const StyledHeader  = styled.header `
  height: 70px;
  box-shadow: 1px 2px 1px 1px lightgray;
  background-color: rgb(255, 44, 0);
  grid-area: header;
  display: flex;
  width: 1500px;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;`
