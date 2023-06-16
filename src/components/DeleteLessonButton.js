import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteLessonMutation } from '../queries/DeleteLessonMutation';
import {actions} from "../pages/AppProvider";

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

    /**
     * Spracovanie kliknutia na tlačidlo DeleteLessonButton.
     * @async
     */
    const handleClick = async () => {
        try {
            const response = await DeleteLessonMutation({ lessonId, lastchange });
            const data = await response.json();
            console.log('DeleteLessonButton: response:', data); // Log the response data

            if (data.data.plannedLessonRemove.msg === 'ok') {
                dispatch(actions.onLessonRemove({lesson: lessonId}));
                dispatch(actions.onSelectedLessonRemove());
                console.log(`Lesson with ID ${lessonId} removed`);
            } else {
                console.log('Lesson is not removed');
            }
        } catch (error) {
            console.error('Error removing selectedLesson:', error);
        }
    };

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
                <button className="btn btn-sm btn-danger" onClick={handleClick}>
                    Remove Lesson
                </button>
            </>
        );
    }
};

export default DeleteLessonButton;
