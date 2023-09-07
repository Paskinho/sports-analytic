import axios from "axios";


export const instance = axios.create ({
    baseURL: 'https://back-for-sport-default-rtdb.firebaseio.com/',
    withCredentials: true,
    headers: {
        'API-KEY': ""
    }

})