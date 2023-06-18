import React from 'react';
import { UserTableRow } from './UserTableRow';

/**
 * Component for rendering a table of users.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.users - The array of user objects to be displayed in the table.
 * @returns {JSX.Element} - The rendered UserTable component.
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
