import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Auth {
    user: { token: null | string },
    error: null | Object
}

const initialState: Auth = {
    user: { token: null },
    error: null
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        updateUserToken: (state, action: PayloadAction<string>) => {
            state.user.token = action.payload
        },
        updateError: (state, action: PayloadAction<Object>) => {
            state.error = action.payload
        }
        // setSelectedTrack: (state, action: PayloadAction<Track | undefined>) => {
        //     state.selectedTrack = action.payload
        // },
        // setPNames: (state, action: PayloadAction<string[]>) => {
        //     state.pNames = action.payload
        // },
        // setPlaylistsData: (state, action: PayloadAction<{string : Track[] | undefined}>) => {
        //     state.playlistData = action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { updateUserToken } = AuthSlice.actions

export default AuthSlice.reducer