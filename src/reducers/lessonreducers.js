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
    console.log('volani stavove funkce, smazat lekce')
    const l = action.payload.lesson
    delete state[l.id]
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
const LessonUserSelect = (state, action) => {
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
 * Funkcia, ktorá aktualizuje lesson so zvoleným užívateľom.
 *
 * @param {Object} state Aktuálny stav lekcií.
 * @param {Object} action Akcia, ktorá má byť vykonaná.
 * @param {Object} action.payload Payload akcie, obsahujúci lesson a užívatela.
 * @param {Object} action.payload.lesson Lesson, ktorá sa má aktualizovať.
 * @param {Object} action.payload.user užívatel, ktorý si vybral lesson.
 * @returns {Object} Nový stav s aktualizovanou lesson a zvoleným užívateľom.
 */

const updateLessonWithUser = (state, action) => {
    const { lesson, user } = action.payload;
    console.log("updateLessonWithUser", lesson, user);
    const newState = LessonUserSelect(state, { payload: { lesson, user } });
    return { ...state, ...newState };
};
/**

 Updates the lesson type in the state based on the provided action payload.
 @param {Object} state - The current state object.
 @param {Object} action - The action object containing the payload.
 @param {Object} action.payload - The payload object containing the lesson and type.
 @param {Object} action.payload.lesson - The lesson object.
 @param {string} action.payload.type - The type of the lesson.
 @returns {Object} - The updated state object with the lesson type modified.
 */
const LessonTypeSelect = (state, action) => {
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

const updateLessonWithType = (state, action) => {
    const { lesson, type } = action.payload;
    console.log("updateLessonWithType", lesson, type);
    const newState = LessonTypeSelect(state, { payload: { lesson, type } });
    return { ...state, ...newState };
}

/**
 * Aktualizuje stav store s výberom učebny pre danú lesson..
 * @param {Object} state - Aktuálny stav lekcií.
 * @param {Object} action - Akcia, ktorá má byť vykonaná.
 * @param {Object} action.payload - Payload akcie, obsahujúci lesson a učebnu.
 * @param {Object} action.payload.lesson - Lesson, ktorá sa má aktualizovať.
 * @param {Object} action.payload.facility - Učebna, ktorá sa má priradiť k lesson.
 * @returns {Object} Nový stav s aktualizovanou lesson a zvolenou učebnou.
 */
const LessonFacilitySelect = (state, action) => {
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
 * Funkcia, ktorá aktualizuje lesson so zvolenou učebnou.
 * @param state - Aktuálny stav lekcií.
 * @param action - Akcia, ktorá má byť vykonaná.
 * @param action.payload - Payload akcie, obsahujúci lesson a učebnu.
 * @param action.payload.lesson - Lesson, ktorá sa má aktualizovať.
 * @param action.payload.facility - Učebna, ktorá sa má priradiť k lesson.
 * @returns {*}
 */

const updateLessonWithFacility = (state, action) => {
    const { lesson, facility } = action.payload;
    console.log("updateLessonWithFacility", lesson, facility);
    const newState = LessonFacilitySelect(state, { payload: { lesson, facility } });
    return { ...state, ...newState };
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

        lesson_user_select: updateLessonWithUser,
        lesson_type_select: updateLessonWithType,
        lesson_facility_select: updateLessonWithFacility
    }
})

//z rezu odvozene akce
export const LessonActions = LessonSlice.actions
//z rezu odvozeny stavovy automat
export const LessonReducer = LessonSlice.reducer
