import {authorizedFetch} from "./authorizedFetch";

export const FacilityPageQueryJSON = () => ({
    query:
        `query {
            facilityPage{
                id,
                name
            }
        }`
})

export const FacilityPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FacilityPageQueryJSON()),
    })