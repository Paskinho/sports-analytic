import styled from "styled-components";

export const LastStats = () => {
    return (
        <StyledSkills>
            <MainTitle>
            LAST STATS
            </MainTitle>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: #ffdff9;
`

const MainTitle = styled.h1`
  font-size: 1.5em;
`