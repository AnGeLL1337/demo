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

export const LinkLessonTopicWithAcTopicMutation = ({lessonId, lastchange, topicId, semesterId}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LinkLessonTopicWithAcTopicMutationJSON(lessonId, lastchange, topicId, semesterId)),
    })