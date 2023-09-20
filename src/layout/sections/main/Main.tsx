import styled from "styled-components";
import photo from "../../../assets/images/Ronaldo News.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <div>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <h1>FOOTBALL NEWS </h1>
            </div>
            <Photo src={photo} alt='PSV and Philips'/>
            </FlexWrapper>
        </div>
    );
};


const Photo = styled.img`
  width: 300px;
  height: 350px
`