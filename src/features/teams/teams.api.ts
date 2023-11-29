import {instance} from "../../common/api/common.api";

export const teamsApi = {
    getTeamsInformation: (arg: ArgTeamsType) => {
        return instance.get('teams', arg)
    }
}

export type ArgTeamsType = {
    id: string
}