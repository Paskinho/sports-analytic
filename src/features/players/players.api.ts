import {instance} from "../../common/api/common.api";

export const PlayersApi = {
 getPlayer: (arg: ArgPlayersType) => {
     return instance.get('players', arg)
 }
}

export type ArgPlayersType = {
    id: string
    season: string
}