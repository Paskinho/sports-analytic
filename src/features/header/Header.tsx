import {Button} from "../../components/ui/button";
import s from "../header/styles.module.scss"
import {Players} from "../players/Players";
import {Typography} from "../../components/ui/typography";
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate()

    const navToHome = () => {
        return navigate('/Home')
    }

    const navToPlayers = () => {
        return navigate('/Players')
    }


    return (
        <header className={s.header}>
            <div className={s.typography}>
                <Typography variant={'caption'} color={'inherit'} onClick={navToHome}>Home</Typography>
                <Typography variant={'caption'} color={'inherit'} onClick={navToPlayers}>Players</Typography>
            </div>
            <div className={s.button}>
                <Button variant={"primary"}>Sign In</Button>
            </div>
        </header>
    )
}