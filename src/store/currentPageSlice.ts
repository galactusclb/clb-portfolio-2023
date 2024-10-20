import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface currentPageState {
    currentPage?: string;
}

const initialState: currentPageState = {
    currentPage: undefined
}

const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<string>) {
            state.currentPage = action.payload
        }
    }
})

export const currentPageActions = currentPageSlice.actions

export default currentPageSlice.reducer