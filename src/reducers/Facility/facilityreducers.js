import {createSlice} from "@reduxjs/toolkit";

/**
 * Redux slice pre zariadenia.
 */

const facilitySlice = createSlice({
    name: 'facility',
    initialState: {
        facility: [],
    },
    reducers: {
        /**
         * Akcia pre aktualizáciu údajov o zariadeniach.
         * @param {Object} state - Aktuálny stav zariadení.
         * @param {Object} action - Akcia s aktualizovanými údajmi o zariadeniach.
         * @returns {Object} - Nový stav zariadení.
         */
        facility_Update: (state, action) => {
            return action.payload;
        }
    },
});

export const FacilityActions = facilitySlice.actions;

export const FacilityReducer = facilitySlice.reducer;
