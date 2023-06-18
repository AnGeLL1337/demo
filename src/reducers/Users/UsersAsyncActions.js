import { UserActions } from "./usersreducers";
import { UserPageQuery } from "../../queries/UserPageQuery";

/**
 * Pomocná funkcia pre získanie a spracovanie údajov o učiteloch z dotazu.
 * @param {Function} query - Funkcia na vykonanie dotazu.
 * @param {Function} resultSelector - Funkcia na výber správnych údajov z odpovede.
 * @param {Function} dispatch - Funkcia na odoslanie akcie do reduxu.
 * @param {Function} getState - Funkcia na získanie aktuálneho stavu.
 * @returns {Promise} - Promise reprezentujúci výsledok dotazu.
 */

export const UsersFetchHelper = (query, resultSelector, dispatch, getState) => {
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
            (users) => log("dispatching")(dispatch(UserActions.users_Update(users))),
            (error) => error
        )
};

/**
 * Funkcia pre získanie údajov o používateľoch.
 * @returns {Function} - Redux thunk funkcia na získanie údajov o používateľoch.
 */


export const UserFetch = () => (dispatch, getState) => {
    const usersSelector = (json) => json.data.userPage; // Update the key to "userPage"
    const bodyfunc = async () => {
        return await UsersFetchHelper(UserPageQuery, usersSelector, dispatch, getState);
    };
    return bodyfunc();
};
