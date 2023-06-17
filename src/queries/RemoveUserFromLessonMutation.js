import { authorizedFetch } from "./authorizedFetch";

const RemoveUserFromLessonMutationJSON = (lessonId, userId) => ({
    "query": `
    mutation(
        $lessonId: ID!,
        $userId: ID!
    ){
    plannedLessonUserDelete(userlesson: {
        userId: $userId,
        planlessonId: $lessonId}) {
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
            plan {
                id
            }
            topic{lessons{type{id name}}}
        }
    }
}`,
    variables:{
        lessonId: lessonId,
        userId: userId,
    }
});

export const RemoveUserFromLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(RemoveUserFromLessonMutationJSON(props.lessonId, props.userId)),
    });
