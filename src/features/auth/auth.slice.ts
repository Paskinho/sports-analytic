import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {
        profile: null as ProfileType | null,

    },
    reducers: {}
})


export type ProfileType = {
    _id: string;
    email: string;
    rememberMe: string;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
    token: string,
    tokenDeathTime: number
}

export const authReducer = slice.reducer