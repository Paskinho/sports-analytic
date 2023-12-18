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

    const columns  = [
        {key: "Teams", sortable: true, title: "Teams"},
        {key: "Country", sortable: true, title: "Country"},
        {key: "Logo", sortable: false, title: "Logo"},
        {key: "Rating", sortable: false, title: "Rating"},
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
            <Table.Root style={{ width: '100%' }}>
                <Table.Header columns={columns} sort={sort} onSort={setSort} />
                    <Table.Body>
                        <Table.Row key={1}>
                            <Table.Cell>{club} Liverpool</Table.Cell>
                            <Table.Cell>{country} England</Table.Cell>
                            <Table.Cell>{logo} <img className={s.img} alt={'Liverpool'} src={'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png'}/></Table.Cell>
                            <Table.Cell>{rating} 87</Table.Cell>
                        </Table.Row>
                        <Table.Row key={2}>
                            <Table.Cell>{club} Man City</Table.Cell>
                            <Table.Cell>{country} England</Table.Cell>
                            <Table.Cell>{logo} <img className={s.img} alt={'ManCity'} src={'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png'}/></Table.Cell>
                            <Table.Cell>{rating} 84</Table.Cell>
                        </Table.Row>
                        <Table.Row key={3}>
                            <Table.Cell>{club} Bayer Leverkusen</Table.Cell>
                            <Table.Cell>{country} Germany</Table.Cell>
                            <Table.Cell>{logo}<img className={s.img} alt={'Bayer'} src={'https://thumbs.dreamstime.com/b/close-up-waving-flag-bayer-leverkusen-football-club-logo-d-rendering-france-85559082.jpg'}/></Table.Cell>
                            <Table.Cell>{rating} 82</Table.Cell>
                        </Table.Row>
                    </Table.Body>
            </Table.Root>
            <Button className={s.button} type={'primary'} onClick={getTeams}>
                Get Teams
            </Button>
            </Card>
        </div>
    )
}

