import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const playersApi = createApi({
    reducerPath: 'playersApi',
    tagTypes: ['Players'],
    baseQuery: fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BASE_API_URL,
        credentials: 'include'
    }),
    endPoints: builder => ({
        getPlayers: builder.query({
            query: ({id, season}) => ({
                url: 'players',
                method: 'GET',
                body: {id, season}
            })
        })
    })
})

export const {usePlayerQuery} = playersApi