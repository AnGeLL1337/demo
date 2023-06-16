import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {deleteLessonAsync} from "../actions/DeleteLessonAsync";

/**
 * Komponenta tlačidlo, ktoré odstraňuje hodinu.
 * @param {Object} props - Vlastnosti komponenty
 * @param {string} props.lessonId - ID hodiny
 * @param {string} props.lastchange - Posledná zmena hodiny
 * @returns {JSX.Element} - Tlačidlo pre odstránenie hodiny
 */
const DeleteLessonButton = ({ lessonId, lastchange }) => {
    const dispatch = useDispatch();

    const [state, setState] = useState(0);

    const setState0 = useCallback(() => setState(0), []);
    const setState1 = useCallback(() => setState(1), []);


    if (state === 0) {
        // Cervene tlacitko nema byt zobrazeno
        return (
            <button className="btn btn-sm btn-warning" onClick={setState1}>
                Remove Lesson
            </button>
        );
    } else {
        // Cervene tlacitko ma byt zobrazeno
        return (
            <>
                <button className="btn btn-sm btn-warning" onClick={setState0}>
                    Cancel
                </button>
                <button className="btn btn-sm btn-danger" onClick={() =>
                dispatch(deleteLessonAsync({lessonId,lastchange}))}>
                    Remove Lesson
                </button>
            </>
        );
    }
};

export default DeleteLessonButton;
