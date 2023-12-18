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

                </Table.Root>
            </Card>a
            <StatTitle>{props.statTitle}</StatTitle>
            <StatDescription>
                <StyledTable>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>Pos</StyledTh>
                            <Typography className={s.text}>1</Typography>
                            <Typography className={s.text}>2</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>Player</StyledTh>
                            <Typography className={s.text}>{props.namePlayerOne}</Typography>
                            <Typography className={s.text}>{props.namePlayerTwo}</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>{props.statTitle}</StyledTh>
                            <Typography className={s.text}>{props.statOne}</Typography>
                            <Typography className={s.text}>{props.statTwo}</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>Conversation</StyledTh>
                            <Typography className={s.text}>{props.successStatOne}</Typography>
                            <Typography className={s.text}>{props.successStatTwo}</Typography>
                        </StyledTr>
                    </StyledTd>
                </StyledTable>
            </StatDescription>
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

