import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindUserActions } from "../reducers/_main";
import {UserTable} from "../components/UserTable";

export const UserPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users || []);

    useEffect(() => {
        const { userFetch } = bindUserActions(dispatch);
        userFetch();
    }, [dispatch]);

    return (
        <div>
            <h2>Users</h2>
            <UserTable users={users}/>
        </div>
    );
};