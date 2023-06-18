import {authorizedFetch} from "./authorizedFetch";


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

/**
 * Funkcia pre vykonanie mutácie na aktualizáciu poradia hodiny.
 * @param {Object} props - Objekt s parametrami pre mutáciu
 * @param {string} props.lessonId - ID hodiny
 * @param {string} props.lastchange - Čas poslednej zmeny hodiny
 * @param {number} props.order - Nové poradie hodiny
 * @returns {Promise} - Promise s výsledkom mutácie
 */


export const UpdateLessonOrderMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UpdateLessonOrderMutationJSON(props.lessonId, props.lastchange, props.order)),
    })