import styled from "styled-components";
import {useState} from "react";
import {FavPlayer, Player} from "../player/Player";
import {PlayerType} from "../player/player.slice";


export type FavoritePlayersType = {
    name: string
}

export const FavoritePlayers = () => {

    const [favPlayers, setFavPlayers] = useState([])

    const addToFav = (player: PlayerType) => {
        setFavPlayers([...favPlayers, player])
    }

    return (
        <StyledFavPlayers>
            <div> Favorite Players </div>
            {favPlayers.map((player)=> (
                <Player club={'Liverpool'} player={player} onAddPlayerToFav={addToFav} name={"Virgil"}/>
            ))}
            {/*{favPlayers.map((player)=> (*/}
            {/*    <FavPlayer player={player} onAddToFavPlayer={addToFav}/>*/}
            {/*))}*/}
            {/*{name}*/}
        </StyledFavPlayers>
    )
}

const StyledFavPlayers = styled.div `
display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: space-between;
`