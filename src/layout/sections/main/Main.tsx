import styled from "styled-components";
import photo from "../../../assets/images/Ronaldo News.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LastStats} from "./last-stats/LastStats";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <MainTitle>FOOTBALL NEWS </MainTitle>
                </div>
                <Photo src={photo} alt='PSV and Philips'/>
                <NewsTitle>History of partnership of PSV and Phillips</NewsTitle>
            </FlexWrapper>
            <LastStats/>
        </StyledMain>

    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #f8eded;
`

const Photo = styled.img`
  width: 300px;
  height: 350px
`

const MainTitle = styled.h1`
  font-size: 1.5em;
`

const NewsTitle = styled.div `
font-size: 1em;
  font-weight: bold;
`