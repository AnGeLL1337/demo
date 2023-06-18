import {authorizedFetch} from "./authorizedFetch";

const LinkLessonsMutationJSON = (lessonId, lastchange, linkedLessonId) => ({
    /* */
    "query":`
    mutation(
    $lessonId: ID!,
    $lastchange: DateTime!,
    $linkedLessonId: ID,
    ){
        plannedLessonUpdate(lesson:{
            id: $lessonId, 
            lastchange: $lastchange,
            linkedlessonId: $linkedLessonId}
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
    }
  }
}`,
    variables:{
        lessonId: lessonId,
        lastchange: lastchange,
        linkedLessonId: linkedLessonId
    }
});

export const LinkLessonsMutation = ({lessonId, lastchange, linkedLessonId}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LinkLessonsMutationJSON(lessonId, lastchange, linkedLessonId)),
    })