/**
 *  Súbor obsahujúci stavový automat pre lekcie.
 */

import {createSlice} from "@reduxjs/toolkit";

import {CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem} from "./keyedreducers";
import SearchButton from "../components/SearchButton";

/**
 * Funkcia pre odstránenie vybranej lesson zo storu aplikácie.
 *
 * @param {Object} state - aktuálny stav aplikácie
 * @param {Object} action - akcia, ktorá spúšťa túto funkciu, obsahuje lesson, ktorú treba odstrániť
 * @returns {Object} nový stav aplikácie bez vybranej lesson
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
    const newLesson = {...l, id: l.id + "DUP-" + testValue+1, name: l.name + ' (kopie)'}
    state[newLesson.id] = newLesson
    return state

}
/**
 * Aktualizuje existujúce hodnoty pre lesson s daným `id` v store na základe nových hodnôt poskytnutých v `action.payload.lesson`.
 *
 * @param {Object} state Aktuálny stav lesson.
 * @param {Object} action Akcia s novými hodnotami pre lesson.
 * @returns {Object} Nový stav lesson po aktualizácii.
 */

const LessonUpdate = (state, action) => {
    const l = action.payload.lesson
    state[l.id] = {...state[l.id], ...l}
    return state
}

/**
 * Aktualizuje stav store s výberom používateľa pre danú lesson.
 *
 * @param {Object} state - Aktuálny stav store.
 * @param {Object} action - Akcia, ktorá sa vykonáva.
 * @param {Object} action.payload - Payload akcie.
 * @param {Object} action.payload.lesson - Lesson, pre ktorú sa má aktualizovať výber používateľa.
 * @param {string|null} action.payload.user - Výber použivateľa pre danú lesson. Ak je null, znamená to odstránenie výberu.
 * @returns {Object} - Nový stav store s aktualizovaným výberom používateľa pre danú lesson.
 */
const updateLessonWithUser = (state, action) => {
    const {lesson, user} = action.payload
    console.log("LessonUserSelect", lesson, user);
    return {
        ...state,
        [lesson.id]: {
            ...state[lesson.id],
            user
        }
    }
}

/**

 Updates the lesson type in the state based on the provided action payload.
 @param {Object} state - The current state object.
 @param {Object} action - The action object containing the payload.
 @param {Object} action.payload - The payload object containing the lesson and type.
 @param {Object} action.payload.lesson - The lesson object.
 @param {string} action.payload.type - The type of the lesson.
 @returns {Object} - The updated state object with the lesson type modified.
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

/**
 * Aktualizuje stav store s výberom učebny pre danú lesson..
 * @param {Object} state - Aktuálny stav lekcií.
 * @param {Object} action - Akcia, ktorá má byť vykonaná.
 * @param {Object} action.payload - Payload akcie, obsahujúci lesson a učebnu.
 * @param {Object} action.payload.lesson - Lesson, ktorá sa má aktualizovať.
 * @param {Object} action.payload.facility - Učebna, ktorá sa má priradiť k lesson.
 * @returns {Object} Nový stav s aktualizovanou lesson a zvolenou učebnou.
 */
const updateLessonWithFacility = (state, action) => {
    const {lesson, facility} = action.payload
    console.log("LessonFacilitySelect", lesson, facility);
    return {
        ...state,
        [lesson.id]: {
            ...state[lesson.id],
            facility
        }
    }
}

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

        lesson_user_select: updateLessonWithUser,
        lesson_type_select: updateLessonWithType,
        lesson_facility_select: updateLessonWithFacility
    }
})

//z rezu odvozene akce
export const LessonActions = LessonSlice.actions
//z rezu odvozeny stavovy automat
export const LessonReducer = LessonSlice.reducer
