import styled from "styled-components";
import {useState} from "react";
import {FavPlayer, Player} from "../player/Player";
import {PlayerType} from "../player/player.slice";


export type FavoritePlayersType = {
    name: string
}

export const FavoritePlayers = () => {

    // const [players, setPlayers] = useState([
    //     {id: 1, name: 'Virgil Van Dijk', country: "Netherlands", club: "Liverpool", age: 31, likes: 0, watch: false},
    //     {id: 2, name: 'Mohamed Salah', country: "Egypt", club: "Liverpool", age: 31, likes: 0, watch: false},
    //     {id: 3, name: 'Darwin Nunez', country: "Uruguay", club: "Liverpool", age: 24, likes: 0, watch: false},
    //     {id: 4, name: 'Alisson Becker', country: "Brazil", club: "Liverpool", age: 30, likes: 0, watch: false},
    // ])
    //
    // const [favorites, setFavorites] = useState([]);
    //
    // const addToWatch = (player) => {
    //     setFavorites([...favorites, player]);
    //
    // }

    return (
        <StyledFavPlayers>
            <div>All players</div>
            <ul>
                {players.map((player) => (
                    <li key={player.id}>
                        {player.name}
                        <button onClick={() => addToWatch(player)}>Add to Favorites</button>
                    </li>
                    ))}
            </ul>
            <div> Favorite Players </div>
            <ul>
                {favorites.map((player)=> (
                    <li key={player.id}>{player.name}</li>
                ))}

            </ul>
        </StyledFavPlayers>
    )
}

const StyledFavPlayers = styled.div `
display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`