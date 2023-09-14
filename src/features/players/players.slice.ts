import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
 name: "players",
    initialState: {

    },
    reducers:{}
})

export const playersReducer = slice.reducer
export const playersActions = slice.actions