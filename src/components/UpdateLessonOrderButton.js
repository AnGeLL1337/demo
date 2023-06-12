import React from "react";
import {useDispatch} from "react-redux";
import {LessonActions} from "../reducers/lessonreducers";
import {UpdateLessonOrderMutation} from "../queries/UpdateLessonOrderMutation";

const UpdateLessonOrderButton = ({lessonId, lastchange, order}) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        //console.log('UpdateLessonOrderButton: lessonId:', lessonId, 'lastchange:', lastchange, 'order:', order);

        try{
            const response = await UpdateLessonOrderMutation({lessonId, lastchange, order});
            const data = await response.json();
            console.log('UpdateLessonOrderButton: response:', data); // Log the response data

            if (data.data.plannedLessonUpdate.msg === 'ok') {
                const updatedLesson = data.data.plannedLessonUpdate.lesson;
                console.log('UpdateLessonOrderButton: updatedLesson:', updatedLesson); // Log the updated lesson
                dispatch(LessonActions.lesson_update(updatedLesson));
                console.log(`Lesson with ID ${lessonId} updated`);
            } else {
                console.log('Lesson is not updated');
            }
        } catch (error) {
            console.error('Error updating lesson order:', error);
        }
    };


    return (
        <button className="btn btn-secondary" onClick={handleClick}>
            Update Lesson Order
        </button>
    );
};

export default UpdateLessonOrderButton;