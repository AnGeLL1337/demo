import {authorizedFetch} from "./authorizedFetch";

export const UsersQueryJSON = () => ({
    "query":
        `query {
            userPage{
                id, 
                name, 
                surname, 
                email
            }
        }`
})

export const UsersQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UsersQueryJSON()),
    })