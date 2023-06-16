import React from "react";
import {useDispatch} from "react-redux";
import {updateLessonOrderAsync} from "../actions/UpdateLessonOrderAsync";

/**
 * Komponenta tlačidlo na aktualizáciu poradia hodín.
 * @param {Object} props - Vlastnosti komponentu
 * @param {string} props.lessonId - ID hodiny
 * @param {string} props.lastchange - Posledná zmena hodiny
 * @param {number} props.order - Poradie hodiny
 * @returns {JSX.Element} - Tlačidlo na aktualizáciu poradia hodín
 */
const UpdateLessonOrderButton = ({lessonId, lastchange, order}) => {
    const dispatch = useDispatch();

    return (
        <button className="btn btn-secondary" onClick={() =>
            dispatch(updateLessonOrderAsync({lessonId,lastchange,order}))}>
            Update Lesson Order
        </button>
    );
};

export default UpdateLessonOrderButton;