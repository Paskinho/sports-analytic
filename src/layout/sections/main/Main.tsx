import styled from "styled-components";
import photo from "../../../assets/images/Ronaldo News.jpeg"

export const Main = () => {
    return (
        <div>
            <div>
                <h1>FOOTBALL NEWS </h1>
            </div>
            <Photo src={photo} alt='PSV and Philips'/>
        </div>
    );
};


const Photo = styled.img`
  width: 100px;
  height: 100px
`