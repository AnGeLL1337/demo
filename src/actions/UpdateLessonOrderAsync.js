import {actions} from "../pages/AppProvider";
import {UpdateLessonOrderMutation} from "../queries/UpdateLessonOrderMutation";

export const updateLessonOrderAsync = ({lessonId, lastchange, order}) => async (dispatch) => {
    try {
        UpdateLessonOrderMutation({lessonId, lastchange, order})
            .then(
                response => response.json())
            .then(json => {
                const message = json.data?.plannedLessonUpdate.msg
                const lesson = json.data?.plannedLessonUpdate.lesson
                if (message === 'ok') {
                    dispatch(actions.onLessonUpdate(lesson))
                    dispatch(actions.setSelectedLesson(lesson))
                }
                return json
            })
    } catch (error) {
        console.error('Error updating selectedLesson order:', error);
    }
}