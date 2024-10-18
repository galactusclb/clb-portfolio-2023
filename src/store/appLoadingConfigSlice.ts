import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface appLoadingConfigState {
    preloadImageProgress?: number | string;
    isPreloadingFinished?: boolean
}

const initialState: appLoadingConfigState = {
    preloadImageProgress: 0,
    isPreloadingFinished: false
}

const appLoadingConfigSlice = createSlice({
    name: "appLoadingConfig",
    initialState,
    reducers: {
        setLoadingProgress(state, action: PayloadAction<number | string>) {
            state.preloadImageProgress = action.payload
        },
        setPreloadingFinishStatus(state, action: PayloadAction<boolean>) {
            state.isPreloadingFinished = action.payload
        },
    }
})

export const appLoadingConfigActions = appLoadingConfigSlice.actions

export default appLoadingConfigSlice.reducer