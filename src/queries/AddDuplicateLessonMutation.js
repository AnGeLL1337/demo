import {authorizedFetch} from "./authorizedFetch";

const AddDuplicateLessonMutationJSON = (lesson) => ({
    "query":`
    mutation {
  plannedLessonInsert(
  lesson:{
  name:"${lesson.name + "-COPY"}"  
  planId:"${lesson.plan.id}"
  order:${lesson.order}
  }
  ) {
    id
    msg
    lesson{
        id, name, lastchange, order, plan{id}
          
    }
  }
}`
});

export const AddDuplicateLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddDuplicateLessonMutationJSON(props.lesson, props.planID)),
    })