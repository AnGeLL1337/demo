/**
 *  Súbor obsahujúci stavový automat pre lekcie.
 */

import {createSlice} from "@reduxjs/toolkit";

import {CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem} from "./keyedreducers";
import SearchButton from "../components/SearchButton";

/**
 * Funkcia pre odstránenie vybranej selectedLesson zo storu aplikácie.
 *
 * @param {Object} state - aktuálny stav aplikácie
 * @param {Object} action - akcia, ktorá spúšťa túto funkciu, obsahuje selectedLesson, ktorú treba odstrániť
 * @returns {Object} nový stav aplikácie bez vybranej selectedLesson
 */

const LessonRemove = (state, action) => {
    console.log('volani stavove funkce, smazat lekce');
    const lesson = action.payload.lesson;
    const newState = {...state};
    delete newState[lesson];
    return newState;
}

/**
 * Funkcia pre duplikovanie lekcie.
 *
 * @param {Object} state - Aktuálny stav aplikácie.
 * @param {Object} action - Akcia, ktorá spúšťa túto funkciu a obsahuje lekciu, ktorú treba duplikovať.
 * @returns {Object} - Nový stav aplikácie s duplicitou lekcie.
 */

const LessonDuplicate = (state, action) => {
    console.log('volani stavove funkce, duplikovat lekce')
    const l = action.payload.lesson
    const newLesson = {...l, id: l.id + "DUP-", name: l.name + ' (kopie)'}
    state[newLesson.id] = newLesson
    return state

}
/**
 * Aktualizuje existujúce hodnoty pre selectedLesson s daným `id` v store na základe nových hodnôt poskytnutých v `action.payload.selectedLesson`.
 *
 * @param {Object} state Aktuálny stav selectedLesson.
 * @param {Object} action Akcia s novými hodnotami pre selectedLesson.
 * @returns {Object} Nový stav selectedLesson po aktualizácii.
 */

const LessonUpdate = (state, action) => {
    const l = action.payload.lesson
    state[l.id] = {...state[l.id], ...l}
    return state
}


/**

 Updates the selectedLesson type in the state based on the provided action payload.
 @param {Object} state - The current state object.
 @param {Object} action - The action object containing the payload.
 @param {Object} action.payload - The payload object containing the selectedLesson and type.
 @param {Object} action.payload.selectedLesson - The selectedLesson object.
 @param {string} action.payload.type - The type of the selectedLesson.
 @returns {Object} - The updated state object with the selectedLesson type modified.
 */
const updateLessonWithType = (state, action) => {
    const {lesson, type} = action.payload
    console.log("LessonTypeSelect", lesson, type);
    return {
        ...state,
        [lesson.id]: {
            ...state[lesson.id],
            type
        }
    }
};


const lessonpage_add = (state, action) => {
    const lessons = action.payload;
    lessons.forEach((lesson) => {
        state[lesson.id] = lesson;
    });
};

/**
 * kompletne definovany stavovy automat pro lekce
 */

export const LessonSlice = createSlice({
    name: 'lessons',
    initialState: {},
    reducers: {
        lesson_add: CreateItem,
        lesson_delete: DeleteItem,
        lesson_replace: ReplaceItem,
        lesson_update: UpdateItem,
        lesson_select: SelectItem,

        lesson_Remove: LessonRemove,
        lesson_Update: LessonUpdate,
        lesson_Search: SearchButton,
        lesson_Duplicate: LessonDuplicate,

        lesson_type_select: updateLessonWithType,

        lessonpage_add: lessonpage_add,
    }
});

//z rezu odvozene akce
export const LessonActions = LessonSlice.actions
//z rezu odvozeny stavovy automat
export const LessonReducer = LessonSlice.reducer
