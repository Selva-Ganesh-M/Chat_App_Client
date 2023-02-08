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


export const { toggleSidebar, updateSidebarType } = appSlice.actions


const appReducer = appSlice.reducer
export default appReducer