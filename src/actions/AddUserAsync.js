import {AddUserToLessonMutation} from "../queries/AddUserToLessonMutation";
import {actions} from "../pages/AppProvider";

export const addUserAsync = ({userId, lessonId}) => async (dispatch) => {
    try {
        AddUserToLessonMutation({userId, lessonId})
            .then(
                response => response.json())
            .then(json => {
                const message = json.data?.plannedLessonUserInsert.msg
                const lesson = json.data?.plannedLessonUserInsert.lesson
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