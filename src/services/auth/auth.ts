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
            query: ({email, password}) => ({
                url: 'auth/login',
                method: 'POST',
                body: {email, password},
            }),
            inValidatesTags: ['Me']
        }),
        signUp: builder.mutation({
            query: body => ({
                url: `auth/sign-up`,
                method: 'POST',
                body,
            }),
        }),
        resetPassword: builder.mutation<unknown, { token: string; password: string }>({
            query: ({token, password}) => ({
                url: `auth/reset-password/${token}`,
                method: "POST",
                body: {password},
            })
        }),
        logout: builder.mutation<unknown, any>({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(_, {dispatch, queryFullfilled}) {
                const patchResult = dispatch(
                    authApi.util.updatedQueryData('getMe', undefined, () => {
                        return null
                    })
                )
                try {
                    await queryFullfilled
                } catch {
                    patchResult.undo()
                } // просмотреть
            }
        })
    })
})

export const {useGetMeQuery, useLogoutMutation, useLoginMutation, useSignUpMutation} = authApi