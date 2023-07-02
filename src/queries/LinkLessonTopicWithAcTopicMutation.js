import {authorizedFetch} from "./authorizedFetch";

const LinkLessonTopicWithAcTopicMutationJSON = (lessonId, lastchange, topicId, semesterId) => ({
    /* */
    "query":`
    mutation(
    $lessonId: ID!,
    $lastchange: DateTime!,
    $topicId: ID!,
    $semesterId: ID!
    ){
        plannedLessonUpdate(lesson:{
            id: $lessonId, 
            lastchange: $lastchange,
            topicId: $topicId,
            semesterId: $semesterId}
            ) {
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
        linkedTo{id name}
        topic{id name}
        semester{id}
    }
  }
}`,
    variables:{
        lessonId: lessonId,
        lastchange: lastchange,
        topicId: topicId,
        semesterId: semesterId
    }
});

/**
 * function for creating mutation for linking lesson with topic
 *
 * @param {Object} props - The parameters for the mutation.
 * @param {string} props.lessonId - The ID of the lesson.
 * @param {Date} props.lastchange - The last change date of the lesson.
 * @param {string} props.topicId - The ID of the topic.
 * @param {string} props.semesterId - The ID of the semester.
 * @returns {Promise} - A promise that resolves with the mutation response.
 */

export const LinkLessonTopicWithAcTopicMutation = ({lessonId, lastchange, topicId, semesterId}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LinkLessonTopicWithAcTopicMutationJSON(lessonId, lastchange, topicId, semesterId)),
    })