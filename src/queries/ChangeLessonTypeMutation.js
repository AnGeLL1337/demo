import {authorizedFetch} from "./authorizedFetch";

const ChangeLessonTypeMutationJSON = (lessonId, lessonLastChanged, lessonTypeId) => ({
    query:`
    mutation{
  plannedLessonUpdate(
  lesson:{
  id:"${lessonId}" 
  lastchange:"${lessonLastChanged}" 
  lessontypeId:"${lessonTypeId}"   })
  {
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
}`
});

export const ChangeLessonTypeMutation = (lessonId, lastChange, lessonTypeId) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ChangeLessonTypeMutationJSON(lessonId, lastChange, lessonTypeId)),
    })