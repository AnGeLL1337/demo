import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveUserFromLessonMutation } from '../queries/RemoveUserFromLessonMutation';
import { actions } from "../pages/AppProvider";

/**
 * Komponenta tlačidlo, které odebírá uživatele z hodiny.
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.userId - ID uživatele
 * @param {string} props.lessonId - ID hodiny
 * @returns {JSX.Element} - Tlačidlo pro odebrání uživatele z hodiny
 */
const RemoveUserFromLessonButton = ({ userId, lessonId }) => {
    const dispatch = useDispatch();

    /**
     * Spracování kliknutí na tlačidlo RemoveUserFromLessonButton.
     * @async
     */
    const handleClick = async () => {
        try {
            const response = await RemoveUserFromLessonMutation({ userId, lessonId });
            const data = await response.json();
            console.log('RemoveUserFromLessonButton: response:', data); // Log the response data

            if (data.data.plannedLessonUserDelete.msg === 'ok') {
                const updatedLesson = data.data.plannedLessonUserDelete.lesson;
                console.log('RemoveUserFromLessonButton: updatedLesson:', updatedLesson); // Log the updated selectedLesson
                dispatch(actions.onLessonUpdate(updatedLesson));
                dispatch(actions.setSelectedLesson(updatedLesson));
                console.log(`User with ID ${userId} removed from lesson with ID ${lessonId}`);
            } else {
                console.log('User is not removed from selectedLesson');
            }
        } catch (error) {
            console.error('Error removing user from selectedLesson:', error);
        }
    };

    return (
        <button className="btn btn-danger" onClick={handleClick}>
            Remove User from Lesson
        </button>
    );
};

export default RemoveUserFromLessonButton;