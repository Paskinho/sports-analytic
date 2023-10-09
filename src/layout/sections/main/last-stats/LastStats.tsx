import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SectionTitle} from "../../../../components/StatsTitle";
import {LastStat} from "./last-stat/LastStat";

export const LastStats = () => {
    return (
        <StyledStats>
            <SectionTitle>
                <FlexWrapper>
                    <LastStat statTitle={'Shots'}
                              namePlayerOne={'Salah'}
                              namePlayerTwo={"Nunez"}
                              statOne={24}
                              statTwo={12}
                              successStatOne={"37.5%"}
                              successStatTwo={"25%"}
                    />
                    <LastStat statTitle={'Tackling'}
                              namePlayerOne={'Virgil'}
                              namePlayerTwo={"Szoboszlai"}
                              statOne={14}
                              statTwo={7}
                              successStatOne={"74%"}
                              successStatTwo={"61%"}
                    />
                </FlexWrapper>
            </SectionTitle>
        </StyledStats>
    );
};


const StyledStats = styled.section`
  min-height: 100vh;
  background-color: #ffdff9;
`