import {Button} from "../../components/ui/button";
import s from "../header/styles.module.scss"

export const Header = () => {
    return (
    <header className={s.header}>
    <div>
        <Button variant={"primary"}>Sign In</Button>
    </div>
    </header>
    )
}