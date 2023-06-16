import {authorizedFetch} from "./authorizedFetch";

/**
 *
 * @param {ID}lessonId
 * @param {string}lastchange
 * @param {number}order
 * @returns {{}}
 * @constructor
 */
const UpdateLessonOrderMutationJSON = (lessonId, lastchange, order) => ({
    query:`
    mutation (
        $lessonId: ID!
        $lastchange: DateTime!
        $order: Int
    ){
        plannedLessonUpdate(lesson:{
            id: $lessonId, 
            lastchange: $lastchange, 
            order: $order}) {
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
}`,
    variables: {
        lessonId: lessonId,
        lastchange: lastchange,
        order: order,
    }

});

export const UpdateLessonOrderMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UpdateLessonOrderMutationJSON(props.lessonId, props.lastchange, props.order)),
    })