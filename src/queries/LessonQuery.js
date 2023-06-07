import {authorizedFetch} from "./authorizedFetch";

export const LessonQueryJSON = (id) => ({
    "query":
        `query ($id: ID!) {
            plannedLessonById(id: $id) {
            id, name, lastchange,
            groups{
            id,name}
            users{
            id email}
            facilities{
            id name}
            }
        }`,
    "variables": {"id": id}
})

export const LessonQueryPageJSON = () => ({
    "query":
        `query{
            plannedLessonPage{
            id, name, lastchange
            }
        }`
})

export const LessonQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LessonQueryJSON(id)),
    })





export const LessonQueryPage = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(LessonQueryPageJSON()),
    })
