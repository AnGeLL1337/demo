import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindUsersActions } from "../reducers/_main";
import {UserTable} from "../components/UserTable";

export const UserPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users || []);

    useEffect(() => {
        const { usersFetch } = bindUsersActions(dispatch);
        usersFetch();
    }, [dispatch]);

    return (
        <div>
            <UserTable users={users}/>
        </div>
    );
};