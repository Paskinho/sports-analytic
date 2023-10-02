import styled from "styled-components";
import {SectionTitle} from "../../../components/StatsTitle";


export const ValuablePlayers = () => {
    return (
        <StyledValPlayers>
            <SectionTitle> VALUABLE PLAYERS</SectionTitle>
        </StyledValPlayers>
    );
};

const StyledValPlayers = styled.section `
    min-height: 100vh;
  background-color: rgba(194,231,223,0.99);
`

