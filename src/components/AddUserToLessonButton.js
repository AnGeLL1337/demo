import React from 'react';
import { useDispatch } from 'react-redux';
import { LessonActions } from '../reducers/lessonreducers';
import { AddUserToLessonMutation } from '../queries/AddUserToLessonMutation';

const AddUserToLessonButton = ({ userId, lessonId }) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        try {
            const response = await AddUserToLessonMutation({ userId, lessonId });
            const data = await response.json();
            console.log('AddUserToLessonButton: response:', data); // Log the response data

            if (data.data.plannedLessonUserInsert.msg === 'ok') {
                const updatedLesson = data.data.plannedLessonUserInsert.lesson;
                console.log('AddUserToLessonButton: updatedLesson:', updatedLesson); // Log the updated lesson
                dispatch(LessonActions.lesson_update(updatedLesson));
                console.log(`User with ID ${userId} added to lesson with ID ${lessonId}`);
            } else {
                console.log('User is not added to lesson');
            }
        } catch (error) {
            console.error('Error adding user to lesson:', error);
        }
    };


    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Add User to Lesson
        </button>
    );
};

export default AddUserToLessonButton;
