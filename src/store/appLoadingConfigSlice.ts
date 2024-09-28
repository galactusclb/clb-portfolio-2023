import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface appLoadingConfigState {
    preloadImageProgress?: number | string;
    isProloadingFinished?: boolean
}

const initialState: appLoadingConfigState = {
    preloadImageProgress: 0,
    isProloadingFinished: false
}

const appLoadingConfigSlice = createSlice({
    name: "appLoadingConfig",
    initialState,
    reducers: {
        setLoadingProgress(state, action: PayloadAction<number | string>) {
            console.log(action.payload);

            state.preloadImageProgress = action.payload
        },
        setPreloadingFinishStatus(state, action: PayloadAction<boolean>) {
            console.log(action.payload);

            state.isProloadingFinished = action.payload
        },
    }
})

export const appLoadingConfigActions = appLoadingConfigSlice.actions

export default appLoadingConfigSlice.reducer