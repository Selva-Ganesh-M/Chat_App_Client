import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        sidebar: {
            open: false,
            type: "CONTACT" // [CONTACT, STARRED, SHARED]
        }
    },
    reducers: {
        toggleSidebar: (state) => {
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType: (state, action) => {
            state.sidebar.type = action.payload
        }
    }
})

// actions
export const { toggleSidebar, updateSidebarType } = appSlice.actions

// selectors
export const getApp = (state) => {
    return state.app
}


const appReducer = appSlice.reducer
export default appReducer