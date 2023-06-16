import React from 'react';
import { useDispatch } from 'react-redux';
import { AddUserToLessonMutation } from '../queries/AddUserToLessonMutation';
import {actions} from "../pages/AppProvider";

/**
 * Komponenta tlačidlo, ktoré pridáva učitela do hodiny.
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.userId - ID učiteľa
 * @param {string} props.lessonId - ID hodiny
 * @returns {JSX.Element} - Tlačidlo pre pridanie učiteľa do hodiny
 */
const AddUserToLessonButton = ({ userId, lessonId }) => {
    const dispatch = useDispatch();

    /**
     * Spracovanie kliknutia na tlačidlo AddUserToLessonButton.
     * @async
     */
    const handleClick = async () => {
        try {
            const response = await AddUserToLessonMutation({ userId, lessonId });
            const data = await response.json();
            console.log('AddUserToLessonButton: response:', data); // Log the response data

            if (data.data.plannedLessonUserInsert.msg === 'ok') {
                const updatedLesson = data.data.plannedLessonUserInsert.lesson;
                console.log('AddUserToLessonButton: updatedLesson:', updatedLesson); // Log the updated selectedLesson
                dispatch(actions.onLessonUpdate(updatedLesson));
                dispatch(actions.setSelectedLesson(updatedLesson));
                console.log(`User with ID ${userId} added to lesson with ID ${lessonId}`);
            } else {
                console.log('User is not added to selectedLesson');
            }
        } catch (error) {
            console.error('Error adding user to selectedLesson:', error);
        }
    };


    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Add User to Lesson
        </button>
    );
};

export default AddUserToLessonButton;
