import {actions} from "../pages/AppProvider";
import {DeleteLessonMutation} from "../queries/DeleteLessonMutation";

export const deleteLessonAsync = ({lessonId, lastchange}) => async (dispatch) => {
    try {
        DeleteLessonMutation({lessonId, lastchange})
            .then(
                response => response.json())
            .then(json => {
                const message = json.data?.plannedLessonRemove.msg
                if (message === 'ok') {
                    dispatch(actions.onLessonRemove({lesson: lessonId}))
                    dispatch(actions.setSelectedLesson(null))
                }
                return json
            })
    } catch (error) {
        console.error('Error deleting lesson:', error);
    }
}