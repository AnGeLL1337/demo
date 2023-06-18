import React from 'react';
import { UserTableRow } from './UserTableRow';

/**
 * Komponenta tabuľka používateľov.
 * @param {Object} props - Vlastnosti komponenty
 * @param {Array} props.users - Zoznam používateľov
 * @returns {JSX.Element} - Tabuľka používateľov
 */

export const UserTable = ({ users }) => {
    return (
        <table className="table table-hover table-stripped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
                users.map((user) => (
                    <UserTableRow key={user.id} user={user}/>
                ))
            ) : (
                <tr>
                    <td colSpan="4">No user found</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};
