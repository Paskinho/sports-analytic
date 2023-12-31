import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./app.slice";
import {authReducer} from "../features/auth/auth.slice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;