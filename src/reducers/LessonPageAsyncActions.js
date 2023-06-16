import {LessonPageQuery} from "../queries/LessonPageQuery";
import {actions} from "../pages/AppProvider";

export const LessonPageFetchHelper = (query, resultselector, dispatch) => {
    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }
    console.log('LessonPageFetchHelper')

    return query()
        .then(
            response => response.json(),
            error => error
        )
        .then(
            json => log('incomming')(json),
        )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
            )
        .then(
            json => log('dispatching')(dispatch(actions.onLessonPageAdd(json))),
            error => error
        )
}

export const LessonPageFetch = () => (dispatch) => {
    const lessonPageSelector = (json) => json.data.plannedLessonPage
     const bodyfunc = async () => {
         return await LessonPageFetchHelper(LessonPageQuery, lessonPageSelector, dispatch)
     }
    return bodyfunc()
}