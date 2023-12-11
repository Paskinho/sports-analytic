import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {LoginArgs, User} from "./types";

export const authApi = createApi({
    reducerPath: 'authApi',
    tagTypes: ['Me'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_API_URL,
        credentials: 'include'
    }),
    endPoints: builder => ({
        getMe: builder.query<User | null, void>({
        query: () => 'auth/me',
            extraOptions: {maxRetries: false},
            providesTags: ['Me']
        }),
        login: builder.mutation<LoginArgs, any>({

        })

    })
})