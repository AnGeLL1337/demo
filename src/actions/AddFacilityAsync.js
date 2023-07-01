import {AddFacilityToLessonMutation} from "../queries/AddFacilityToLessonMutation";
import {actions} from "../pages/AppProvider";

// Zatvorky -
export const addFacilityAsync = ({facilityId, lessonId}) => async (dispatch) => {
    let result = null;
    try{
        result = AddFacilityToLessonMutation({facilityId, lessonId})
            .then(
                response => response.json())
            .then(json => {
                const message = json.data?.plannedLessonFacilityInsert.msg
                const lesson = json.data?.plannedLessonFacilityInsert.lesson
                if (message === 'ok') {
                    dispatch(actions.onLessonUpdate(lesson))
                    dispatch(actions.setSelectedLesson(lesson))
                }
                return json
            })

    } catch (error) {
        console.error('Error adding facility to selectedLesson:', error);
    }
    return result;
}