import {FavPlayer, Player} from "./player/Player";
import {Button} from "../../components/ui/button";
import s from "../players/styles.module.scss"
import {playersThunks} from "./players.slice";
import {toast} from "react-toastify";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {Table} from '../../components/ui/table'
import {ControlledTextField} from "../../components/ui/controlled/controlled-text-field";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PlayerType} from "./player/player.slice";
import {Spinner} from "../../components/ui/spinner";


export const Players = () => {


    const dispatch = useAppDispatch()

    const [searchItem, setSearchItem] = useState('')


    const onSearchPlayers = ({players}) => {
        return (
            players.filter(player =>
                player.toLowerCase().includes(searchItem.toLowerCase())
            ))
    }

    const getPlayers = (players: PlayerType) => {
        dispatch(playersThunks.getPlayers()).then((res) => {
            return {players} // УТОЧНИТЬ!
            // {players}
            // toast.success('Successfully')
        })
    }

    const {
        control, register, handleSubmit,
        formState: {errors}
    } = useForm({})

    // request for API
    //
    // const [players, setPlayers] = useState([])
    //
    // useEffect(() => {
    //     fetch('https://api-football-v1.p.rapidapi.com/v3/players')
    //         .then(res => res.json())
    //         .then(data => setPlayers(data))
    // }, [])

    return (
        <div className={s.players}>
            <div>
                <ControlledTextField
                className={s.search}
                control={control}
                placeholder={'Search Players'}
                name={'searchPlayers'}
            />
                <Button onClick={onSearchPlayers} className={s.buttonSearchPlayer} variant={'primary'}>Search</Button>
            </div>

            <div>
                <Player name={""} club={"Liverpool"}/>
                {/*<FavPlayer/>*/}
            </div>
            {/*<Spinner fullscreen/>*/}
            <Button onClick={getPlayers}>Get Players</Button>

            {/*<ul>*/}
            {/*    {players.map(player => (*/}
            {/*        <li key={player.id}>{player.name}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}


            {/*{players}*/}
            {/*<ul>*/}
            {/*    {filteredPlayers.map((player,index)=> (*/}
            {/*        <li key={index}>{player}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*<Table.Root>*/}
            {/*    <Table.Header>*/}
            {/*        <Table.Body>*/}
            {/*            asf*/}
            {/*        </Table.Body>*/}
            {/*    </Table.Header>*/}
            {/*</Table.Root>*/}
        </div>
    )
}