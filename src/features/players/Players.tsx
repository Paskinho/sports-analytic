import {FavPlayer, Player} from "./player/Player";
import {Button} from "../../components/ui/button";
import s from "../players/styles.module.scss"
import {playersThunks} from "./players.slice";
import {toast} from "react-toastify";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {Table} from '../../components/ui/table'
import {ControlledTextField} from "../../components/ui/controlled/controlled-text-field";
import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


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

    const {
        control, register, handleSubmit,
        formState: {errors}
    } = useForm({})

    return (
        <div className={s.players}>
            <div><ControlledTextField
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
            <Button onClick={getPlayers}>Get Players</Button>
            <Table.Root>
                <Table.Header>
                    <Table.Body>
                        asf
                    </Table.Body>
                </Table.Header>
            </Table.Root>
        </div>
    )
}