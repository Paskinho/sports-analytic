import {instance} from "../../common/api/common.api";

export const teamsApi = {
    getTeamsInformation: () => {
        return instance.get('teams')
    }

}