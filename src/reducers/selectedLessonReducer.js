import { createSlice } from '@reduxjs/toolkit';

const setSelectedLesson = (state, action) => {
    const lesson = action.payload;
    console.log("setSelectedLesson", lesson);
    state.selectedLesson = lesson || null;
};

const removeSelectedLesson = (state) => {
    state.selectedLesson = null;
}


const selectedLessonSlice = createSlice({
    name: 'selectedLesson',
    initialState: { selectedLesson: null }, // Začiatočná hodnota pre selectedLesson je null
    reducers: {
        setSelectedLesson,
        removeSelectedLesson,

    },
});

export const SelectedLessonActions = selectedLessonSlice.actions;

export const SelectedLessonReducer = selectedLessonSlice.reducer;

