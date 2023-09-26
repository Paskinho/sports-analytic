import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {StatsTitle} from "../../../../components/StatsTitle";
import {LastStat} from "./last-stat/LastStat";

export const LastStats = () => {
    return (
        <StyledStats>
            <StatsTitle>
                <FlexWrapper>
                    <LastStat statTitle={'Shots'} namePlayerOne={'Salah'} namePlayerTwo={"Nunez"} statOne={24} statTwo={12}/>
                    <LastStat statTitle={'Tackling'} namePlayerOne={'Virgil'} namePlayerTwo={"Soboszlai"} statOne={14} statTwo={7}/>
                </FlexWrapper>
            </StatsTitle>
        </StyledStats>
    );
};


const StyledStats = styled.section`
  min-height: 100vh;
  background-color: #ffdff9;
`