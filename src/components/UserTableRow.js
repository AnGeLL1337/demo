import React from 'react';
import AddUserToLessonButton from "./AddUserToLessonButton";
import {useSelector} from "react-redux";

/**
 * Komponenta reprezentujúca jeden riadok v tabuľke s používateľmi.
 *
 * @param {Object} user - Objekt predstavujúci používateľa, obsahujúci vlastnosti id, name, surname a email.
 * @param {Object} lesson - Objekt predstavujúci lekciu, obsahujúci vlastnosti id, name a lastchange
 * @returns {JSX.Element} JSX.Element
 */
export const UserTableRow = ({ user }) => {
    const lesson = useSelector((state) => state.selectedLesson.selectedLesson);
    const lessonId = lesson ? lesson.id : null;
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>
                <AddUserToLessonButton userId={user.id} lessonId={lessonId} />
            </td>
        </tr>
    );
};
