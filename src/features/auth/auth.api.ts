import {instance} from "../../common/api/common.api";

export const authApi = {
    register: () => {
        return instance.post('auth/register') // уточнить про арг
    }
}