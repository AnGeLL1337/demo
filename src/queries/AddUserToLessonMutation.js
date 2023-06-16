import {authorizedFetch} from "./authorizedFetch";

const AddUserToLessonMutationJSON = (lessonId, userId) => ({
    "query":`
    mutation(
        $lessonId: ID!,
        $userId: ID!
    ) {
    plannedLessonUserInsert(userlesson: {
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

export const AddUserToLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddUserToLessonMutationJSON(props.lessonId, props.userId)),
    })