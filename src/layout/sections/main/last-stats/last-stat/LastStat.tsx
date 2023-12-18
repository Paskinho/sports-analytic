import {Typography} from "../../../../../components/ui/typography";
import styled from "styled-components";
import {StyledTable, StyledTd, StyledTh, StyledTr} from "../../../../../components/StyledTable";
import s from "./LastStat.module.scss"
import {Card} from "../../../../../components/ui/card";
import {Table} from '../../../../../components/ui/table'
import {useState} from "react";


type LastStatPropsType = {
    statTitle: string
    namePlayerOne: string
    namePlayerTwo: string
    statOne: number
    statTwo: number
    successStatOne: string
    successStatTwo: string
}

export const LastStat = (props: LastStatPropsType) => {


    const columns = [
        {key: "Pos", title: "Position"},
        {key: "Player", title: "Player"},
        {key: "Shots", title: "Shots"},
        {key: "Conversation", title: "Age"},

    ]

    return (
        <StyledDiv>
            <Card>
                <Typography>Shots</Typography>
                <Table.Root style={{width: '100%'}}>
                    <Table.Header columns={columns}/>
                    <Table.Body>
                        <Table.Row key={1}>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>{props.namePlayerOne}</Table.Cell>
                            <Table.Cell>{props.statOne}</Table.Cell>
                            <Table.Cell>{props.successStatOne}</Table.Cell>
                        </Table.Row>
                        <Table.Row key={2}>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>{props.namePlayerTwo}</Table.Cell>
                            <Table.Cell>{props.statTwo}</Table.Cell>
                            <Table.Cell>{props.successStatTwo}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Card>

        </StyledDiv>
    );
};


const StatTitle = styled.h3`
  display: flex;

`

const StatDescription = styled.div`
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 200px;
  width: 150px;
`

