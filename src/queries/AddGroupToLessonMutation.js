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

export const AddGroupToLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddGroupToLessonMutationJSON(props.lessonId, props.groupId)),
    })