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

export const UsersActions = usersSlice.actions;
export const UsersReducer = usersSlice.reducer;
