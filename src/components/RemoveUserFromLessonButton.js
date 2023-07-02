import React from 'react';
import { useDispatch } from 'react-redux';
import {removeUserAsync} from "../actions/RemoveUserFromLessonAsync";


/**
 * Komponenta tlačidlo, které odebírá uživatele z hodiny.
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.userId - ID uživatele
 * @param {string} props.lessonId - ID hodiny
 * @returns {JSX.Element} - Tlačidlo pro odebrání uživatele z hodiny
 */
const RemoveUserFromLessonButton = ({ userId, lessonId }) => {
    const dispatch = useDispatch();

    return (
        <button className="btn btn-danger" onClick={() =>
        {dispatch(removeUserAsync({userId,lessonId}))}}>
            Remove User from Lesson
        </button>
    );
};

export default RemoveUserFromLessonButton;