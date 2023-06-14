import {authorizedFetch} from "./authorizedFetch";

export const LessonPageQueryJSON = () => ({
    query:
        `query {
            plannedLessonPage {
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
        }
    }`
});

export const LessonPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LessonPageQueryJSON()),
    })