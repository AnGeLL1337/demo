import { createSlice } from '@reduxjs/toolkit';

/**
 * Nastavuje vybranú lekciu v stave aplikácie.
 * @param {Object} state - Aktuálny stav aplikácie.
 * @param {Object} action - Akcia obsahujúca vybranú lekciu.
 */
const setSelectedLesson = (state, action) => {
    const lesson = action.payload;
    console.log("setSelectedLesson", lesson);
    state.selectedLesson = lesson || null;
};

/**
 * Odstraňuje vybranú lekciu zo stavu aplikácie.
 * @param {Object} state - Aktuálny stav aplikácie.
 */

const selectedLessonRemove = (state) => {
    state.selectedLesson = null;
}


/**
 * Stavový automat pre vybranú lekciu.
 */

const selectedLessonSlice = createSlice({
    name: 'selectedLesson',
    initialState: { selectedLesson: null }, // Začiatočná hodnota pre selectedLesson je null
    reducers: {
        setSelectedLesson,
        selectedLessonRemove,

    },
});

export const SelectedLessonActions = selectedLessonSlice.actions;

export const SelectedLessonReducer = selectedLessonSlice.reducer;

