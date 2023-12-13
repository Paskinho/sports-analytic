import styled from "styled-components";
import {StatsTitle} from "../../../components/StatsTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Region} from "./regionOfPlayer/Region";
import {Card} from "../../../components/ui/card";
import Europe from "../../../assets/images/Europe.png"
import Asia from "../../../assets/images/Asia.png"
import Africa from "../../../assets/images/Africa.png"
import NorthAmerica from "../../../assets/images/NorthAmerica.png"
import SouthAmerica from "../../../assets/images/SouthAmerica.png"
import Australia from "../../../assets/images/Australia.png"
import {Container} from "../../../common/styles/Container";

const region = ["Europe", "Asia", "Africa", "North America", "South America","Australia and Oceania"]


export const ValuablePlayers = () => {
    return (
        <StyledValPlayers>
            <Container>
            <StatsTitle> VALUABLE PLAYERS</StatsTitle>
            <Menu menuItems={region}/>
            <Card>
            <FlexWrapper display={'flex'} justify={"space-around"} direction={'row'}>
                <Region title={region[0]} text={`${region[0]} valuable players`} image={Europe}/>
                <Region title={region[1]} text={`${region[1]} valuable players`} image={Asia}/>
                <Region title={region[2]} text={`${region[2]} valuable players`} image={Africa}/>
                <Region title={region[3]} text={`${region[3]} valuable players`} image={NorthAmerica}/>
                <Region title={region[4]} text={`${region[4]} valuable players`} image={SouthAmerica}/>
                <Region title={region[5]} text={`${region[5]} valuable players`} image={Australia}/>
            </FlexWrapper>
            </Card>

            </Container>
        </StyledValPlayers>
    );
};

const StyledValPlayers = styled.section `
    min-height: 100vh;
  padding-top: 20px;
  //background-color: rgba(194,231,223,0.99);
`

