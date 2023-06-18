import React from 'react';
import { useDispatch } from 'react-redux';
import { bindLessonActions } from "../reducers/_main";

/**
 * Komponenta tlačidlo, ktoré načíta všetky lekcie.
 * @returns {JSX.Element} - Tlačidlo pre načítanie všetkých hodiny
 */

const LoadAllLessonsButton = () => {
    const dispatch = useDispatch();

    /**
     * Funkcia spracovávajúca kliknutie na tlačidlo.
     */

    const handleButtonClick = () => {
        const { lessonPageFetch } = bindLessonActions(dispatch);
        lessonPageFetch();
    };

    return (
        <button className={"btn btn-info"} onClick={handleButtonClick}>Načítať všetky lekcie</button>
    );
};

export default LoadAllLessonsButton;
