import React from 'react';

/**
 * Komponenta reprezentujúca jeden riadok v tabuľke s používateľmi.
 *
 * @param {Object} user - Objekt predstavujúci používateľa, obsahujúci vlastnosti id, name, surname a email.
 * @returns {JSX.Element} JSX.Element
 */
export const UserTableRow = ({ user }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
        </tr>
    );
};
