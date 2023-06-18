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
            topic{lessons{type{id name}}}
        }
    }`
});


/**
 * Funkcia pre vytvorenie dotazu na stránku hodín.
 * @returns {Promise} - Promise s výsledkom dotazu
 */

export const LessonPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LessonPageQueryJSON()),
    })