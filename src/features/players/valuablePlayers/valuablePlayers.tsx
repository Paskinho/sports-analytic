import styled from "styled-components";
import {SectionTitle} from "../../../components/StatsTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";

const region = ["Europe", "Asia", "Africa", "North America", "South America","Australia and Oceania"]


export const ValuablePlayers = () => {
    return (
        <StyledValPlayers>
            <SectionTitle> VALUABLE PLAYERS</SectionTitle>
            <Menu menuItems={region}/>
            <FlexWrapper>
            </FlexWrapper>
        </StyledValPlayers>
    );
};

const StyledValPlayers = styled.section `
    min-height: 100vh;
  background-color: rgba(194,231,223,0.99);
`

