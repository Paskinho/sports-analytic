import {Typography} from "../../components/ui/typography";
import styled from "styled-components";
import {Table} from '../../components/ui/table'
import {useState} from "react";
import {Card} from "../../components/ui/card";
import {useAppDispatch} from "../../common/components/hooks/useAppDispatch";
import {teamsThunks} from "./teams.slice";
import {toast} from "react-toastify";


export const Teams = () => {

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
        <StyledTeams>
            <Card>
            <Typography>Teams rating on {Date()} </Typography>
            {/*<Table.Root>*/}
            {/*    <Table.Header columns={columns} sort={sort} onSort={setSort}>*/}
            {/*        <Table.Body>*/}
            {/*            <Table.Row>*/}
            {/*                <Table.Cell>*/}

            {/*                </Table.Cell>*/}
            {/*            </Table.Row>*/}

            {/*        </Table.Body>*/}
            {/*    </Table.Header>*/}

            {/*</Table.Root>*/}

            <button onClick={getTeams}>
                Get Teams
            </button>
            </Card>
        </StyledTeams>

    )
}

const StyledTeams = styled.div`
  padding-top: 100px;
`