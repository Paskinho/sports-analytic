import {Typography} from "../../components/ui/typography";
import styled from "styled-components";

export const Teams = () => {
    return (
        <StyledTeams>
            <Typography>Teams rating on {Date.now()} </Typography>

        </StyledTeams>

    )
}

const StyledTeams = styled.div `
padding-top: 100px;
`