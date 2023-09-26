import React from 'react';
import {Typography} from "../../../../../components/ui/typography";
import styled from "styled-components";
import {StyledTable, StyledTd, StyledTh, StyledTr} from "../../../../../components/StyledTable";


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
    return (
        <StyledDiv>
            <StatTitle>{props.statTitle}</StatTitle>
            <StatDescription>
                <StyledTable>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>Pos</StyledTh>
                            <Typography>1</Typography>
                            <Typography>2</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>Player</StyledTh>
                            <Typography>{props.namePlayerOne}</Typography>
                            <Typography>{props.namePlayerTwo}</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>{props.statTitle}</StyledTh>
                            <Typography>{props.statOne}</Typography>
                            <Typography>{props.statTwo}</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                            <StyledTh>Conversation</StyledTh>
                            <Typography>{props.successStatOne}</Typography>
                            <Typography>{props.successStatTwo}</Typography>
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

