import {Typography} from "../../components/ui/typography";
import styled from "styled-components";
import {Table} from '../../components/ui/table'
import {useState} from "react";
import {Card} from "../../components/ui/card";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {teamsThunks} from "./teams.slice";
import {toast} from "react-toastify";;
import s from "./teams.module.scss"
import {Button} from "../../components/ui/button";


export type TeamsProps = {
    club: string
    country: string
    logo: string
    rating: number

}

export const Teams = ({club, country, logo, rating}:TeamsProps) => {

    const [sort, setSort] = useState({key: "updated", direction: 'asc'})

    const columns = [
        {key: "Teams", sortable: true, title: "Teams"},
        {key: "updated", sortable: true, title: "Updated"},
    ]

    const dispatch = useAppDispatch()

    const getTeams = (teams: any) => {
        dispatch(teamsThunks.getTeamsInformation()).then((res)=> {
            toast.success('Successfully')
        })
    }

    return (
        // <Page className={s.main}>
        <div className={s.main}>
            <Card className={s.card}>
            <Typography>Teams rating on {Date()} </Typography>
            <Table.Root>
                <Table.Header columns={columns} sort={sort} onSort={setSort}>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Header>

            </Table.Root>

            <Button className={s.button} type={'primary'} onClick={getTeams}>
                Get Teams
            </Button>
            </Card>
        </div>
    )
}

