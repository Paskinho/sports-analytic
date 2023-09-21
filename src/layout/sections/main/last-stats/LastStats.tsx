import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../assets/icons/Icon";
import {Typography} from "../../../../components/ui/typography";
import {StatsTitle} from "../../../../components/StatsTitle";

export const LastStats = () => {
    return (
        <StyledStats>
            <StatsTitle>
                <FlexWrapper>
                    <Stat>
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
                    </Stat>

                </FlexWrapper>
            </StatsTitle>
        </StyledStats>
    );
};


const StyledStats = styled.section`
  min-height: 100vh;
  background-color: #ffdff9;
`