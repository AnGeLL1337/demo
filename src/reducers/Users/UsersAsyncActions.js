import { UserActions } from "./usersreducers";
import { UserPageQuery } from "../../queries/UserPageQuery";

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

export const UserFetch = () => (dispatch, getState) => {
    const usersSelector = (json) => json.data.userPage; // Update the key to "userPage"
    const bodyfunc = async () => {
        return await UsersFetchHelper(UserPageQuery, usersSelector, dispatch, getState);
    };
    return bodyfunc();
};
