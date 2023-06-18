import {FacilityActions} from "./facilityreducers";
import {FacilityPageQuery} from "../../queries/FacilityPageQuery";

/**
 * Pomocná funkcia pre získanie údajov o zariadeniach.
 * @param {Function} query - Funkcia pre vykonanie dotazu na získanie údajov o zariadeniach.
 * @param {Function} resultSelector - Funkcia pre výber výsledku dotazu.
 * @param {Function} dispatch - Funkcia na vyvolanie akcie v Redux store.
 * @param {Function} getState - Funkcia pre získanie aktuálneho stavu Redux store.
 * @returns {Promise} - Promise s výsledkom dotazu
 */

export const FacilityFetchHelper = (query, resultSelector, dispatch, getState) => {
    const log = (text) => (p) => {
        console.log(text);
        console.log(JSON.stringify(p));
        return p;
    };
    return query()
        .then(
            (response) => response.json(),
            (error) => error
        )
        .then(
            (json) => log("incoming")(json)
        )
        .then(
            (json) => (resultSelector(json)),
            (error) => error
        )
        .then(
            (facilities) => log("dispatching")(dispatch(FacilityActions.facility_Update(facilities))),
            (error) => error
        )
};

/**
 * Akcia pre získanie údajov o zariadeniach.
 * @returns {Function} - Akcia pre získanie údajov o zariadeniach
 */

export const FacilityFetch = () => (dispatch, getState) => {
    const facilitiesSelector = (json) => json.data.facilityPage; // Update the key to "facilityPage"
    const bodyfunc = async () => {
        return await FacilityFetchHelper(FacilityPageQuery, facilitiesSelector, dispatch, getState);
    };
    return bodyfunc();
}