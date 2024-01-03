import {instance} from "../../common/api/common.api";
import {createApi} from "@reduxjs/toolkit/query";

export const authApi = {
    register: () => {
        return instance.post('auth/register') // уточнить про арг
    }
}
