import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: "player",
    initialState: {

    },
    reducers:{}
})

export type PlayerType = {
    name: string
    club: string
    onAddPlayerToFav: (player)=> void
    like?: number
}