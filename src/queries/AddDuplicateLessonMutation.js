import {authorizedFetch} from "./authorizedFetch";

const AddDuplicateLessonMutationJSON = (lesson) => ({
    query:`
    mutation {
  plannedLessonInsert(
  lesson:{
  name:"${lesson.name + "-COPY"}"  
  planId:"${lesson.plan.id}"
  }
  ) {
    id
    msg
    lesson {
        id, 
        name, 
        lastchange, 
        order, 
        plan { id }     
        topic { id name }
        semester { id }  
    }
  }
}`
});

export const AddDuplicateLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddDuplicateLessonMutationJSON(props.lesson)),
    })