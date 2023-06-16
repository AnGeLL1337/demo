import React from "react";
import {useDispatch} from "react-redux";
import {addFacilityAsync} from "../actions/AddFacilityAsync";

/**
 * Komponenta tlačidlo, ktoré pridáva miestnosť do hodiny.
 * @param {Object} props - Vlastnosti komponentu
 * @param {string} props.facilityId - ID miestnosti
 * @param {string} props.lessonId - ID hodiny
 * @returns {JSX.Element} - Tlačidlo pre pridanie miestnosti do hodiny
 */
const AddFacilityToLessonButton = ({facilityId, lessonId}) => {
    const dispatch = useDispatch();

    return (
        <button className="btn btn-success" onClick={() =>
        {dispatch(addFacilityAsync({facilityId,lessonId}))}}>
            Add Facility to Lesson
        </button>
    );
};

export default AddFacilityToLessonButton;