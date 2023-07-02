import {LessonActions} from "../reducers/lessonreducers";
import {SelectedLessonActions} from "../reducers/selectedLessonReducer";
import {LinkLessonsMutation} from "../queries/LinkLessonsMutation";

export const LinkLessonAsync = ({ lessonId, lastchange, linkedLessonId }) => async (dispatch) =>{
    try {
        LinkLessonsMutation({lessonId, lastchange, linkedLessonId})
            .then(
                response => response.json())
            .then(json => {
                const message = json.data?.plannedLessonUpdate.msg
                const lesson = json.data?.plannedLessonUpdate.lesson
                if (message === 'ok') {
                    dispatch(LessonActions.lessonUpdate(lesson))
                    dispatch(SelectedLessonActions.setSelectedLesson(lesson))
                }
                return json
            } )
    } catch (error) {
        console.error('Error while linking lessons', error);
    }
}