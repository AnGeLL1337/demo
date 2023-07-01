import {LessonActions} from "../reducers/lessonreducers";
import {SelectedLessonActions} from "../reducers/selectedLessonReducer";
import {LinkLessonTopicWithAcTopicMutation} from "../queries/LinkLessonTopicWithAcTopicMutation";

export const LinkLessonTopicWithAcTopicAsync = ({lessonId, lastchange, topicId, semesterId}) => async (dispatch) =>{
    try {
        LinkLessonTopicWithAcTopicMutation({lessonId, lastchange, topicId, semesterId})
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