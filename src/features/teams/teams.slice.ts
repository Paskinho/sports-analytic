import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {teamsApi} from "./teams.api"

const slice = createSlice({
    name: 'teams',
    initialState: {

    },
    reducers: {}
})

const getTeamsInformation = createAsyncThunk('teams', async (arg, thunkApi) => {
    const res = await teamsApi.getTeamsInformation(arg)
    return {teams: res.data}
})


export const teamsReducer = slice.reducer
export const teamsActions = slice.actions
export const teamsThunks = {getTeamsInformation}