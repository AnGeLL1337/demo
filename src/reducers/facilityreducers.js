import {createSlice} from "@reduxjs/toolkit";

const facilitySlice = createSlice({
    name: 'facility',
    initialState: {
        facility: [],
    },
    reducers: {
        facility_Update: (state, action) => {
            return action.payload;
        }
    },
});

export const FacilityActions = facilitySlice.actions;

export const FacilityReducer = facilitySlice.reducer;
