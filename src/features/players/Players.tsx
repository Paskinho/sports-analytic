import {Player} from "./player/Player";
import {Button} from "../../components/ui/button";
import s from "../players/styles.module.scss"

export const Players = () => {

    return <div className={s.players}>
        <div><input placeholder={"Search player"}/>
            <Button variant={'primary'}/>
        </div>
        <div><Player/></div>
    </div>
}