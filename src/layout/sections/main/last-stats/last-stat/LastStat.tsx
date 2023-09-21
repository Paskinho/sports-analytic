import React from 'react';
import {Typography} from "../../../../../components/ui/typography";
import styled from "styled-components";
import {StyledTable, StyledTd, StyledTh} from "../../../../../components/StyledTable";

export const LastStat = () => {
    return (
        <div>
            <StatTitle>Shots</StatTitle>
            <StatDescription>
                <StyledTable>
                    <StyledTd>
                        <StyledTh>Pos.</StyledTh>
                        <Typography>1</Typography>
                    </StyledTd>
                    <StyledTd>
                        <StyledTh>Player</StyledTh>
                        <Typography>Salah</Typography>
                    </StyledTd>
                    <StyledTd>
                        <StyledTh>Shots</StyledTh>
                        <Typography>24(9 in target)</Typography>
                    </StyledTd>
                    <StyledTd>
                        <StyledTh>Conversation</StyledTh>
                        <Typography>37,5%</Typography>
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

