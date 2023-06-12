import {authorizedFetch} from "./authorizedFetch";

/**
 *
 * @param {string}lessonId
 * @param {string}lastchange
 * @param {number}order
 * @returns {{}}
 * @constructor
 */
const UpdateLessonOrderMutationJSON = (lessonId, lastchange, order) => ({
    query:`
    mutation{
        plannedLessonUpdate(lesson:{
            id:"${lessonId}", 
            lastchange: "${lastchange}", 
            order:${order}}) {
    id
    msg
    lesson{
        id, name, lastchange, order,
        groups{
            id,name
        }
        users{
            id email
        }
        facilities{
            id name
        }
    }
  }
}`

});

export const UpdateLessonOrderMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UpdateLessonOrderMutationJSON(props.lessonId, props.lastchange, props.order)),
    })