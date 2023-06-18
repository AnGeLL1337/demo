import {authorizedFetch} from "./authorizedFetch";

const AddGroupToLessonMutationJSON = (lessonId, groupId) => ({
    query:`
    mutation(
        $lessonId: ID!,
        $groupId: ID!,
    ){
  plannedLessonGroupInsert(grouplesson:{
    groupId: $groupId, 
    planlessonId: $lessonId  }) {
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
    }
  }
}`,
    variables:{
        lessonId: lessonId,
        groupId: groupId,
    }
});

/**
 * Funkcia pre vytvorenie mutácie pre pridanie skupiny do hodiny.
 * @param {Object} props - Vlastnosti mutácie
 * @param {string} props.lessonId - ID hodiny
 * @param {string} props.groupId - ID skupiny
 * @returns {Promise} - Promise s výsledkom mutácie
 */

export const AddGroupToLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddGroupToLessonMutationJSON(props.lessonId, props.groupId)),
    })