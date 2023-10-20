import {Player} from "./player/Player";
import {Button} from "../../components/ui/button";
import s from "../players/styles.module.scss"
import {playersThunks} from "./players.slice";
import {toast} from "react-toastify";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {Slider} from "../../components/ui/slider";

export const Players = () => {


    const dispatch = useAppDispatch()

    const onSearchPlayers = () => {
        return alert("Successfully search")
    }

    const getPlayers = (players: any) => {
         dispatch(playersThunks.getPlayers()).then((res) => {
            toast.success('Successfully')
        })

    }

    return (
        <div className={s.players}>
            <div><input placeholder={"Search player"}/>
                <Button onClick={onSearchPlayers} className={s.buttonSearchPlayer} variant={'primary'}>Search</Button>
            </div>
            <Button onClick={getPlayers}>Get Players</Button>
            <div><Player/></div>

        </div>
    )
}