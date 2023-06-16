import React from 'react';
import { useDispatch } from 'react-redux';
import {addUserAsync} from "../actions/AddUserAsync";

/**
 * Komponenta tlačidlo, ktoré pridáva učitela do hodiny.
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.userId - ID učiteľa
 * @param {string} props.lessonId - ID hodiny
 * @returns {JSX.Element} - Tlačidlo pre pridanie učiteľa do hodiny
 */
const AddUserToLessonButton = ({ userId, lessonId }) => {
    const dispatch = useDispatch();


    return (
        <button className="btn btn-primary" onClick={() =>
        {dispatch(addUserAsync({userId,lessonId}))}}>
            Add User to Lesson
        </button>
    );
};

export default AddUserToLessonButton;
