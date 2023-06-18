import {LessonQuery} from "../queries/LessonQuery";
import {actions} from "../pages/AppProvider";

/**
 * Získa položku zo servera a pridá ju alebo ju aktualizuje v úložisku (store).
 * @param {*} id - Identifikátor položky.
 * @param {function} query - Funkcia na získanie položky zo servera.
 * @param {function} resultselector - Funkcia na spracovanie výsledku a vytvorenie objektu položky.
 * @param {function} dispatch - Funkcia z reduxu na vykonanie akcie.
 * @param {function} getState - Funkcia z reduxu na získanie stavu aplikácie.
 * @returns  - vráti výsledok operácie.
 */

export const LessonFetchHelper = (id, query, resultselector, dispatch, getState) => {
    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }
    console.log('LessonFetchHelper' + id)
    return query(id)
        .then(
            response => response.json(),
            error => error
        )
        .then(
            j => log('incomming')(j)
        )
        // .then(
        //     response => log('received')(response.json()),
        //     error => error
        //     //error
        //     )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
        )
        .then(
            json => log('dispatching')(dispatch(actions.onLessonAdd(json))),
            error => error
        )
}

/**
 * Získa lekciu zo servera, skontroluje jej typ a v prípade potreby požiada o detailné údaje.
 * Nakoniec výsledok uloží do úložiska (store).
 * @param {*} id - Identifikátor lekcie.
 * @returns -  vráti výsledok operácie.
 */

// Not using right now
export const LessonFetch = (id) => (dispatch, getState) => {
    const lessonSelector = (json) => json.data.plannedLessonById
    const bodyfunc = async () => {
        let lessonData = await LessonFetchHelper(id, LessonQuery, lessonSelector, dispatch, getState)

        if (lessonData.type !== "cd49e152-610c-11ed-9f29-001a7dda7110") {
            lessonData = await LessonFetchHelper(id, LessonQuery, lessonSelector, dispatch, getState)
        }
        return lessonData
    }
    return bodyfunc()
}

