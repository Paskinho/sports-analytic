import {Typography} from "../../components/ui/typography";
import styled from "styled-components";
import { Table } from '../../components/ui/table'


export const Teams = () => {



    const columns =[
        {key: "Teams", sortable: true, title: "Teams"}

    ]

    return (
        <StyledTeams>
            <Typography>Teams rating on {Date()} </Typography>
<Table.Root>
    <Table.Header columns={columns} sort={sort}>
        Teams
    </Table.Header>

</Table.Root>
        </StyledTeams>

    )
}

const StyledTeams = styled.div `
padding-top: 100px;
`