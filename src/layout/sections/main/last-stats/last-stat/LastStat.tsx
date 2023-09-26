import React from 'react';
import {Typography} from "../../../../../components/ui/typography";
import styled from "styled-components";
import {StyledTable, StyledTd, StyledTh, StyledTr} from "../../../../../components/StyledTable";


type LastStatPropsType = {
statTitle: string
}

export const LastStat = (props: LastStatPropsType) => {
    return (
        <div>
            <StatTitle>{props.statTitle}</StatTitle>
            <StatDescription>
                <StyledTable>
                    <StyledTd>
                        <StyledTr>
                        <StyledTh>Pos.</StyledTh>
                        <Typography>1</Typography>
                        <Typography>2</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                        <StyledTh>Player</StyledTh>
                        <Typography>Salah</Typography>
                        <Typography>Nunez</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                        <StyledTh>Shots</StyledTh>
                        <Typography>24(9 in target)</Typography>
                        <Typography>12(4 in target)</Typography>
                        </StyledTr>
                    </StyledTd>
                    <StyledTd>
                        <StyledTr>
                        <StyledTh>Conversation</StyledTh>
                        <Typography>37,5%</Typography>
                        <Typography>25%</Typography>
                        </StyledTr>
                    </StyledTd>
                </StyledTable>
            </StatDescription>
        </div>
    );
};


const StatTitle = styled.h3`

`

const StatDescription = styled.div `
`

