import styled from "styled-components";

export const FavoritePlayers = () => {
    return (
        <StyledFavPlayers>
            Favorite Players
        </StyledFavPlayers>
    )
}

const StyledFavPlayers = styled.div `
display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: space-between;
`