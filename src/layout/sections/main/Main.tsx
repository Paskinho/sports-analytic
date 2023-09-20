import styled from "styled-components";
import photo from "../../../assets/images/Ronaldo News.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <MainTitle>FOOTBALL NEWS </MainTitle>
            </div>
            <Photo src={photo} alt='PSV and Philips'/>
            </FlexWrapper>
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
    
`