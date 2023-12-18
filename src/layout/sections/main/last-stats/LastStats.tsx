import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {StatsTitle} from "../../../../components/StatsTitle";
import {LastStat} from "./last-stat/LastStat";
import {Typography} from "../../../../components/ui/typography";
import s from './LastStats.module.scss'

export const LastStats = () => {
    return (
        <StyledStats>
            <StatsTitle>
                <Typography variant={'large'} className={s.title}>LAST STATS</Typography>
                <FlexWrapper className={s.flexWrapper}>
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
                    <LastStat statTitle={'Key Passes'}
                              namePlayerOne={'Alexandr-Arnold'}
                              namePlayerTwo={"Salah"}
                              statOne={78}
                              statTwo={64}
                              successStatOne={"64"}
                              successStatTwo={"51%"}
                    />
                </FlexWrapper>
            </StatsTitle>
        </StyledStats>
    );
};


const StyledStats = styled.section`
  min-height: 100vh;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`