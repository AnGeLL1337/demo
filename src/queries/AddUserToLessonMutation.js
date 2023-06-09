import {authorizedFetch} from "./authorizedFetch";

const AddUserToLessonMutationJSON = (lessonId, userId) => ({
    "query":`
    mutation {
    plannedLessonUserInsert(userlesson: {
        userId: "${userId}",
        planlessonId: "${lessonId}"}) {
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
}`
});

export const AddUserToLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddUserToLessonMutationJSON(props.lessonId, props.userId)),
    })