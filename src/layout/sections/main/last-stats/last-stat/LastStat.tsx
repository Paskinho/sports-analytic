import React from 'react';
import {Typography} from "../../../../../components/ui/typography";
import styled from "styled-components";

export const LastStat = () => {
    return (
        <div>
            <StatTitle>Shots</StatTitle>
            <StatDescription>
                <table>
                    <td>
                        <th>Pos.</th>
                        <Typography>1</Typography>
                    </td>
                    <td>
                        <th>Player</th>
                        <Typography>Salah</Typography>
                    </td>
                    <td>
                        <th>Shots</th>
                        <Typography>24(9 in target)</Typography>
                    </td>
                    <td>
                        <th>Conversation</th>
                        <Typography>37,5%</Typography>
                    </td>
                </table>
            </StatDescription>
        </div>
    );
};


const StatTitle = styled.h3`

`

const StatDescription = styled.div `
`