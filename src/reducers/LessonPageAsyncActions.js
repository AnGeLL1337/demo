import {LessonPageQuery} from "../queries/LessonPageQuery";
import {actions} from "../pages/AppProvider";

/**
 * Získa stránku lekcií zo servera a pridá ju do úložiska (store).
 * @param {function} query - Funkcia na získanie stránky lekcií zo servera.
 * @param {function} resultselector - Funkcia na spracovanie výsledku a vytvorenie objektu stránky lekcií.
 * @param {function} dispatch - Funkcia z reduxu na vykonanie akcie.
 */
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

/**
 * Získa stránku lekcií zo servera a pridá ju do úložiska (store).
 * @returns  -  vráti výsledok operácie.
 */
export const LessonPageFetch = () => (dispatch) => {
    const lessonPageSelector = (json) => json.data.plannedLessonPage
     const bodyfunc = async () => {
         return await LessonPageFetchHelper(LessonPageQuery, lessonPageSelector, dispatch)
     }
    return bodyfunc()
}