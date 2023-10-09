import styled from "styled-components";
import {SectionTitle} from "../../../components/StatsTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Region} from "./regionOfPlayer/Region";

const region = ["Europe", "Asia", "Africa", "North America", "South America","Australia and Oceania"]


export const ValuablePlayers = () => {
    return (
        <StyledValPlayers>
            <SectionTitle> VALUABLE PLAYERS</SectionTitle>
            <Menu menuItems={region}/>
            <FlexWrapper>
                <Region title={region[0]} text={"European valuable players"} image={""}/>
                <Region title={region[1]} text={"European valuable players"} image={""}/>
                <Region title={region[2]} text={"European valuable players"} image={""}/>
                <Region title={region[3]} text={"European valuable players"} image={""}/>
                <Region title={region[4]} text={"European valuable players"} image={""}/>
                <Region title={region[5]} text={"European valuable players"} image={""}/>
            </FlexWrapper>
        </StyledValPlayers>
    );
};

const StyledValPlayers = styled.section `
    min-height: 100vh;
  background-color: rgba(194,231,223,0.99);
`

