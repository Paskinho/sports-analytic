import styled from "styled-components";
import photo from "../../../assets/images/Ronaldo News.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LastStats} from "./last-stats/LastStats";
import {ValuablePlayers} from "../../../features/players/valuablePlayers/valuablePlayers";
import {Container} from "../../../common/styles/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <MainTitle>FOOTBALL NEWS </MainTitle>
                </div>
                <Photo src={photo} alt='PSV and Philips'/>
                <NewsTitle>History of partnership of PSV and Phillips</NewsTitle>
            </FlexWrapper>
            <LastStats/>
            <ValuablePlayers/>
            </Container>
        </StyledMain>

    );
};

const StyledMain = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 70px;
  display: flex;
`

const Photo = styled.img`
  width: 300px;
  height: 350px
`

const MainTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 400;
`

const NewsTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
`