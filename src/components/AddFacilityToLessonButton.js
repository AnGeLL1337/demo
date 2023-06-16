import React from "react";
import {useDispatch} from "react-redux";
import {AddFacilityToLessonMutation} from "../queries/AddFacilityToLessonMutation";
import {actions} from "../pages/AppProvider";

/**
 * Komponenta tlačidlo, ktoré pridáva miestnosť do hodiny.
 * @param {Object} props - Vlastnosti komponentu
 * @param {string} props.facilityId - ID miestnosti
 * @param {string} props.lessonId - ID hodiny
 * @returns {JSX.Element} - Tlačidlo pre pridanie miestnosti do hodiny
 */
const AddFacilityToLessonButton = ({facilityId, lessonId}) => {
    const dispatch = useDispatch();

    /**
     * Spracovanie kliknutia na tlačidlo AddFacilityToLessonButton.
     * @async
     */
    const handleClick = async () => {
        try {
            const response = await AddFacilityToLessonMutation({facilityId, lessonId});
            const data = await response.json();
            console.log('AddFacilityToLessonButton: response:', data); // Log the response data

            if (data.data.plannedLessonFacilityInsert.msg === 'ok') {
                const updatedLesson = data.data.plannedLessonFacilityInsert.lesson;
                console.log('AddFacilityToLessonButton: updatedLesson:', updatedLesson); // Log the updated selectedLesson
                dispatch(actions.onLessonUpdate(updatedLesson));
                dispatch(actions.setSelectedLesson(updatedLesson));
                console.log(`Facility with ID ${facilityId} added to lesson with ID ${lessonId}`);
            } else {
                console.log('Facility is not added to selectedLesson');
            }
        } catch (error) {
            console.error('Error adding facility to selectedLesson:', error);
        }
    };

    return (
        <button className="btn btn-success" onClick={handleClick}>
            Add Facility to Lesson
        </button>
    );
};

export default AddFacilityToLessonButton;