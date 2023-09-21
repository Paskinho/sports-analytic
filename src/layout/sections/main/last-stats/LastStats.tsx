import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../assets/icons/Icon";

export const LastStats = () => {
    return (
        <StyledStats>
            <StatsTitle>
                <FlexWrapper>
                    <Stat>
                        <StatTitle>Shots</StatTitle>
                        <StatDescription>
                            <

                        </StatDescription>
                    </Stat>

                </FlexWrapper>
            </StatsTitle>
        </StyledStats>
    );
};


const StyledStats = styled.section`
  min-height: 100vh;
  background-color: #ffdff9;
`

const StatsTitle = styled.h1`
  font-size: 1.5em;
`