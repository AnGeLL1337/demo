import {actions} from "../pages/AppProvider";
import {AddGroupToLessonMutation} from "../queries/AddGroupToLessonMutation";

export const addGroupAsync = ({userId, lessonId}) => async (dispatch) => {
    try {
        AddGroupToLessonMutation({userId, lessonId})
            .then(
                response => response.json())
            .then(json => {
                const message = json.data?.plannedLessonGroupInsert.msg
                const lesson = json.data?.plannedLessonGroupInsert.lesson
                if (message === 'ok') {
                    dispatch(actions.onLessonUpdate(lesson))
                    dispatch(actions.setSelectedLesson(lesson))
                }
                console.log(json)
                return json
            })
    } catch (error) {
        console.error('Error adding user to selectedLesson:', error);
    }
}