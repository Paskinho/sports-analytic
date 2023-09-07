import {Player} from "./player/Player";
import {Button} from "../../components/ui/button";
import s from "../players/styles.module.scss"

export const Players = () => {


    const onSearchPlayers = () => {
        return alert("Successfully search")
    }


    return <div className={s.players}>
        <div><input placeholder={"Search player"}/>
            <Button onClick={onSearchPlayers} className={s.buttonSearchPlayer} variant={'primary'}>Search</Button>
        </div>
        <div><Player/></div>
    </div>
}