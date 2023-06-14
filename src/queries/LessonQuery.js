import {authorizedFetch} from "./authorizedFetch";

export const LessonQueryJSON = (id) => ({
    query:
        `query ($id: ID!) {
            plannedLessonById(id: $id) {
            id, name, lastchange, order,
            topic{lessons{type{id name}}},
            groups{
            id,name}
            users{
            id email}
            facilities{
            id name
            }
            plan{id}
            }
            
        }`,
    "variables": {"id": id}
})

export const LessonQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LessonQueryJSON(id)),
    })
