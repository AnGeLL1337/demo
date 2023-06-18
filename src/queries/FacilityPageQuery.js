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

/**
 * Funkcia pre vytvorenie dotazu na stránku zariadení.
 * @returns {Promise} - Promise s výsledkom dotazu
 */

export const FacilityPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FacilityPageQueryJSON()),
    })