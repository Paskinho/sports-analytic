import {Button} from "../../components/ui/button";
import s from "../header/styles.module.scss"
import {Players} from "../players/Players";
import {Typography} from "../../components/ui/typography";

export const Header = () => {
    return (
    <header className={s.header}>
        <div className={s.typography}>
        <Typography variant={'link1'}>Home</Typography>
        </div>
    <div className={s.button}>
        <Button variant={"primary"}>Sign In</Button>
    </div>
    </header>
    )
}