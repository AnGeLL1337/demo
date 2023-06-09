import {LessonActions} from "./lessonreducers";

import {LessonQuery} from "../queries/LessonQuery";
import {fakeQueryLesson} from "../queries/fakequerylesson";

/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id
 * @param query
 * @param resultselector
 * @param dispatch
 * @param getState
 * @returns promise
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
            json => log('dispatching')(dispatch(LessonActions.lesson_replace(json))),
            error => error
        )
}

/**
 * Fetch the group from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id
 * @returns
 */

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

/**
 * Fetch the group from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id
 * @returns
 */

export const LessonFakeFetch = (id) => (dispatch, getState) => {
    const lessonSelector = (json) => json.data.plannedLessonById
    const bodyfunc = async () => {
        let lessonData = await LessonFetchHelper(id, fakeQueryLesson, lessonSelector, dispatch, getState)

        if (lessonData.type !== "cd49e152-610c-11ed-9f29-001a7dda7110") {
            lessonData = await LessonFetchHelper(id, fakeQueryLesson, lessonSelector, dispatch, getState)
        }
        return lessonData
    }
    return bodyfunc()
}