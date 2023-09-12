import {instance} from "../../common/api/common.api";

export const PlayersApi = {
 getPlayer: () => {
     return instance.get('players')
 }
}