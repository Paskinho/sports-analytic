import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {playersApi} from "./players.api";


const slice = createSlice({
    name: "players",
    initialState: {},
    reducers: {}
})

const getPlayers = createAsyncThunk<{ catalog: any }>('players', async (arg, thunkApi) => {
    const res = await playersApi.getPlayers(arg)
    return {players: res.data}
})

export const playersReducer = slice.reducer
export const playersActions = slice.actions
export const playersThunks = {getPlayers}