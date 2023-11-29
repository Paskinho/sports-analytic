import {Typography} from "../../components/ui/typography";
import styled from "styled-components";
import {Table} from '../../components/ui/table'
import {useState} from "react";
import {Card} from "../../components/ui/card";


export const Teams = () => {

    const [sort, setSort] = useState({key: "updated", direction: 'asc'})

    const columns = [
        {key: "Teams", sortable: true, title: "Teams"},
        {key: "updated", sortable: true, title: "Updated"},
    ]

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

            <button>
                Save Rating
            </button>
            </Card>
        </StyledTeams>

    )
}

const StyledTeams = styled.div`
  padding-top: 100px;
`