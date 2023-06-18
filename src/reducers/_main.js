import { LessonActions } from "reducers/lessonreducers"
import { LessonFetch } from "reducers/LessonAsyncActions"
import { UserFetch } from "./Users/UsersAsyncActions";
import { FacilityFetch } from "./Facility/FacilityAsyncActions";
import { LessonPageFetch } from "./LessonPageAsyncActions";
import {SelectedLessonActions} from "./selectedLessonReducer";


/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 *
 * @param {function} dispatch - funkcia z reduxu, ktora prevedie akciu
 * @returns {object} - objekt s akciami, ktore sa maju vykonat
 */
export const bindLessonActions = (dispatch) => {
    return {
        lessonPageFetch: () => dispatch(LessonPageFetch()),
        lessonFetch: (id) => dispatch(LessonFetch(id)),
        onLessonRemove: (payload) => dispatch(LessonActions.lessonRemove(payload)),
        onLessonUpdate: (payload) => dispatch(LessonActions.lessonUpdate(payload)),
        onLessonAdd: (payload) => dispatch(LessonActions.lessonAdd(payload)),
        onLessonPageAdd: (payload) => dispatch(LessonActions.lessonpage_add(payload)),

        //onLessonDuplicate: (payload) => dispatch(LessonActions.lesson_Duplicate(payload)),
        //onLessonTypeSelect: (payload) => dispatch(LessonActions.lesson_type_select(payload)),
    };
};

/**
 * Vytvára akcie pre používateľov, ktoré sa vykonajú pri volaní.
 * @param {function} dispatch - Funkcia z reduxu, ktorá vykonáva akciu.
 * @returns {object} - Objekt obsahujúci akcie na vykonanie.
 */
export const bindUserActions = (dispatch) => {
    return {
        userFetch: () => dispatch(UserFetch()),
    };
};

/**
 * Vytvára akcie pre zariadenia, ktoré sa vykonajú pri volaní.
 * @param {function} dispatch - Funkcia z reduxu, ktorá vykonáva akciu.
 * @returns {object} - Objekt obsahujúci akcie na vykonanie.
 */
export const bindFacilityActions = (dispatch) => {
    return {
        facilityFetch: () => dispatch(FacilityFetch()),
    };
};

/**
 * Vytvára akcie pre stránku lekcií, ktoré sa vykonajú pri volaní.
 * @param {function} dispatch - Funkcia z reduxu, ktorá vykonáva akciu.
 * @returns {object} - Objekt obsahujúci akcie na vykonanie.
 */
export const bindLessonPageActions = (dispatch) => {
    return {
        lessonPageFetch: () => dispatch(LessonPageFetch()),
        setSelectedLesson: (payload) => dispatch(SelectedLessonActions.setSelectedLesson(payload)),
        onSelectedLessonRemove: () => dispatch(SelectedLessonActions.selectedLessonRemove()),
    };
}
