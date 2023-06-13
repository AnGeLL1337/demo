import {authorizedFetch} from "./authorizedFetch";


const RemoveLessonMutationJSON = (lessonId, lastchange) => ({
    query:`
    mutation{
        plannedLessonRemove(lesson:{
            id:"${lessonId}",
            lastchange:"${lastchange}"}) {
        id
        msg
        }
    }`
});

/**
 * Funkcia pre odstránenie hodiny pomocou GraphQL mutácie.
 * @param {Object} props - Vlastnosti pre mutáciu
 * @param {string} props.lessonId - ID hodiny, ktorú chcete odstrániť
 * @param {string} props.lastchange - Posledná zmena hodiny
 * @returns {Promise<Response>} - Promise s odpoveďou zo servera
 */
export const DeleteLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(RemoveLessonMutationJSON(props.lessonId, props.lastchange)),
    })