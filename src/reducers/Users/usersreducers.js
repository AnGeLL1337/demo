import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        users_Update: (state, action) => {
            return action.payload;
        },
        // other user-related actions...
    },
});

export const UserActions = usersSlice.actions;
export const UserReducer = usersSlice.reducer;
