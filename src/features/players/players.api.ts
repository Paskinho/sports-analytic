import {instance} from "../../common/api/common.api";

export const playersApi = {
    getPlayers: (arg: ArgPlayersType) => {
        return instance.get('players', {params: arg})
    }
}

export type ArgPlayersType = {
    id: string
    season: string
}