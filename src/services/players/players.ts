import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const playersApi = createApi({
    reducerPath: 'playersApi',
    tagTypes: ['Players'],
    baseQuery: fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BASE_API_URL,
        credentials: 'include'
    })
})