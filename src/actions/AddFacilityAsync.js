import {AddFacilityToLessonMutation} from "../queries/AddFacilityToLessonMutation";
import {actions} from "../pages/AppProvider";

export const addFacilityAsync = ({facilityId, lessonId}) => async (dispatch) => {
    try{
        AddFacilityToLessonMutation({facilityId, lessonId})
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
}