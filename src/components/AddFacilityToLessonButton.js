import React from "react";
import {useDispatch} from "react-redux";
import {LessonActions} from "../reducers/lessonreducers";
import {AddFacilityToLessonMutation} from "../queries/AddFacilityToLessonMutation";

const AddFacilityToLessonButton = ({facilityId, lessonId}) => {
    const dispatch = useDispatch();
    const handleClick = async () => {
        try {
            const response = await AddFacilityToLessonMutation({facilityId, lessonId});
            const data = await response.json();
            console.log('AddFacilityToLessonButton: response:', data); // Log the response data

            if (data.data.plannedLessonFacilityInsert.msg === 'ok') {
                const updatedLesson = data.data.plannedLessonFacilityInsert.lesson;
                console.log('AddFacilityToLessonButton: updatedLesson:', updatedLesson); // Log the updated lesson
                dispatch(LessonActions.lesson_update(updatedLesson));
                console.log(`Facility with ID ${facilityId} added to lesson with ID ${lessonId}`);
            } else {
                console.log('Facility is not added to lesson');
            }
        } catch (error) {
            console.error('Error adding facility to lesson:', error);
        }
    };

    return (
        <button className="btn btn-success" onClick={handleClick}>
            Add Facility to Lesson
        </button>
    );
};

export default AddFacilityToLessonButton;