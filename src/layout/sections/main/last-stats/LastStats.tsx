import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {StatsTitle} from "../../../../components/StatsTitle";
import {LastStat} from "./last-stat/LastStat";

export const LastStats = () => {
    return (
        <StyledStats>
            <StatsTitle>
                <FlexWrapper>
                    <LastStat/>
                    <LastStat/>
                </FlexWrapper>
            </StatsTitle>
        </StyledStats>
    );
};


const StyledStats = styled.section`
  min-height: 100vh;
  background-color: #ffdff9;
`