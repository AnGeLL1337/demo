import { LessonActions } from "reducers/lessonreducers"
import { LessonFetch } from "reducers/LessonAsyncActions"
import { UserFetch } from "./UsersAsyncActions";
import { FacilityFetch } from "./FacilityAsyncActions";
import { LessonPageFetch } from "./LessonPageAsyncActions";


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
        onLessonDuplicate: (payload) =>
            dispatch(LessonActions.lesson_Duplicate(payload)),
        onLessonUpdate: (payload) =>
            dispatch(LessonActions.lesson_Update(payload)),
        onLessonTypeSelect: (payload) =>
            dispatch(LessonActions.lesson_type_select(payload)),
        lessonFetch: (id) => dispatch(LessonFetch(id)),
        lessonPageFetch: () => dispatch(LessonPageFetch()),
    };
};

export const bindUserActions = (dispatch) => {
    return {
        userFetch: () => dispatch(UserFetch()),
    };
};

export const bindFacilityActions = (dispatch) => {
    return {
        facilityFetch: () => dispatch(FacilityFetch()),
    };
};
