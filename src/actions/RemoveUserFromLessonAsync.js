import {RemoveUserFromLessonMutation} from "../queries/RemoveUserFromLessonMutation";
import {actions} from "../pages/AppProvider";

export const removeUserAsync = ({userId, lessonId}) => async (dispatch) => {
    try {
        RemoveUserFromLessonMutation({userId, lessonId})
            .then(
                response => response.json())
            .then(json => {
                const message = json.data?.plannedLessonUserDelete.msg
                const lesson = json.data?.plannedLessonUserDelete.lesson
                if (message === 'ok') {
                    dispatch(actions.onLessonUpdate(lesson))
                    dispatch(actions.setSelectedLesson(lesson))
                }
                return json
            })
    } catch (error) {
        console.error('Error adding user to selectedLesson:', error);
    }
}