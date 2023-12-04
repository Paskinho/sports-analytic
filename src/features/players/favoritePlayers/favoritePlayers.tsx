import styled from "styled-components";
import {useState} from "react";
import {Player} from "../player/Player";
import {PlayerType} from "../player/player.slice";


export type FavoritePlayersType = {
    name: string
}

export const FavoritePlayers = ({name}: FavoritePlayersType) => {

    const [favPlayers, setFavPlayers] = useState([])

    const addToFav = (player: PlayerType) => {
        setFavPlayers([...favPlayers, player])
    }

    return (
        <StyledFavPlayers>
            <div> Favorite Players </div>
            <Player player={FavoritePlayers}/>
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