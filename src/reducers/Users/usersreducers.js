import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        /**
         * Akcia na aktualizáciu údajov o používateľoch.
         * @param {Object} state - Aktuálny stav.
         * @param {Object} action - Redux akcia.
         * @returns {Object} - Nový stav.
         */
        users_Update: (state, action) => {
            return action.payload;
        },
    },
});

export const UserActions = usersSlice.actions;
export const UserReducer = usersSlice.reducer;
