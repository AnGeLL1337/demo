import {authorizedFetch} from "./authorizedFetch";

export const UsersQueryJSON = () => ({
    query:
        `query {
            userPage{
                id, 
                name, 
                surname, 
                email
            }
        }`
})

/**
 * Funkcia pre získanie dát o stránke používateľov.
 * @returns {Promise} - Promise s výsledkom dotazu
 */

export const UserPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UsersQueryJSON()),
    })