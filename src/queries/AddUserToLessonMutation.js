import {authorizedFetch} from "./authorizedFetch";

const AddUserToLessonMutationJSON = (lessonId, userId) => ({
    "query":`
    mutation(
        $lessonId: ID!,
        $userId: ID!
    ) {
    plannedLessonUserInsert(userlesson: {
        userId: $userId,
        planlessonId: $lessonId}) {
        id
        msg
        lesson {
            id
            name
            lastchange
            order
            groups {
                id
                name
            }
            users {
                id
                email
            }
            facilities {
                id
                name
            }
            plan {
                id
            }
            topic{lessons{type{id name}}}
        }
    }
}`,
    variables:{
        lessonId: lessonId,
        userId: userId,
    }
});

/**
 * Funkcia pre vytvorenie mutácie pre pridanie učiteľa do hodiny.
 * @param {Object} props - Vlastnosti mutácie
 * @param {string} props.lessonId - ID hodiny
 * @param {string} props.userId - ID učiteľa
 * @returns {Promise} - Promise s výsledkom mutácie
 */

export const AddUserToLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddUserToLessonMutationJSON(props.lessonId, props.userId)),
    })