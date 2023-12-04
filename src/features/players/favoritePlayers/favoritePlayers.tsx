import styled from "styled-components";


export type FavoritePlayersType = {
    name: string
}

export const FavoritePlayers = ({name}: FavoritePlayersType) => {
    return (
        <StyledFavPlayers>
            <div> Favorite Players </div>
            {name}
        </StyledFavPlayers>
    )
}

const StyledFavPlayers = styled.div `
display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: space-between;
`