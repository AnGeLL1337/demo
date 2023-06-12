import {FacilityActions} from "./facilityreducers";
import {FacilityPageQuery} from "../queries/FacilityPageQuery";

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

export const FacilityFetch = () => (dispatch, getState) => {
    const facilitiesSelector = (json) => json.data.facilityPage; // Update the key to "facilityPage"
    const bodyfunc = async () => {
        return await FacilityFetchHelper(FacilityPageQuery, facilitiesSelector, dispatch, getState);
    };
    return bodyfunc();
}