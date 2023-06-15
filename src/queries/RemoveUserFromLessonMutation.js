import { authorizedFetch } from "./authorizedFetch";

const RemoveUserFromLessonMutationJSON = (lessonId, userId) => ({
    "query": `
    mutation {
      plannedLessonUserDelete(userlesson: {
        userId: "${userId}",
        planlessonId: "${lessonId}"
      }) {
        id
        msg
        lesson {
          id
          name
          lastchange
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
        }
      }
    }
  `
});

export const RemoveUserFromLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(RemoveUserFromLessonMutationJSON(props.lessonId, props.userId)),
    });
