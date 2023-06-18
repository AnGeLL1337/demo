import {authorizedFetch} from "./authorizedFetch";

const AddFacilityToLessonMutationJSON = (lessonId, facilityId) => ({
    query:`
    mutation(
        $lessonId: ID!,
        $facilityId: ID!,
    ) {
  plannedLessonFacilityInsert(facilitylesson: {
    planlessonId: $lessonId, 
    facilityId: $facilityId}) {
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
      plan{id}
        topic{lessons{type{id name}}}
    }
  }
}`,
    variables:{
        lessonId: lessonId,
        facilityId: facilityId,
    }
});

/**
 * Funkcia pre vytvorenie mutácie pre pridanie zariadenia do hodiny.
 * @param {Object} props - Vlastnosti mutácie
 * @param {string} props.lessonId - ID hodiny
 * @param {string} props.facilityId - ID zariadenia
 * @returns {Promise} - Promise s výsledkom mutácie
 */

export const AddFacilityToLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddFacilityToLessonMutationJSON(props.lessonId, props.facilityId)),
    })