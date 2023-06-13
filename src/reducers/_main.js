import { LessonActions } from "reducers/lessonreducers"
import { LessonFetch, LessonFakeFetch } from "reducers/LessonAsyncActions"
import {UserFetch} from "./UsersAsyncActions";
import {FacilityFetch} from "./FacilityAsyncActions";


/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 *
 * @param {function} dispatch - funkcia z reduxu, ktora prevedie akciu
 * @returns {object} - objekt s akciami, ktore sa maju vykonat
 */
export const bindLessonActions = (dispatch) => {
    return {

        onLessonRemove: (payload) => dispatch(LessonActions.lesson_Remove(payload)),
        onLessonDuplicate: (payload) => dispatch(LessonActions.lesson_Duplicate(payload)),
        onLessonUpdate: (payload) => dispatch(LessonActions.lesson_Update(payload)),

        onLessonUserSelect: (payload) => dispatch(LessonActions.lesson_user_select(payload)),
        onLessonTypeSelect: (payload) => dispatch(LessonActions.lesson_type_select(payload)),
        onLessonFacilitySelect: (payload) => dispatch(LessonActions.lesson_facility_select(payload)),

        lessonFetch: (id) => dispatch(LessonFetch(id)),
        lessonFakeFetch: (id) => dispatch(LessonFakeFetch(id)),

    }
}

export const bindUserActions = (dispatch) => {
    return {
        userFetch: () => dispatch(UserFetch()),
    }
}

export const bindFacilityActions = (dispatch) => {
    return {
        facilityFetch: () => dispatch(FacilityFetch()),
    }
}
