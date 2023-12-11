import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Me'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL,
        credentials: 'include'
    })
})