import React from 'react';
import { useDispatch } from 'react-redux';
import { bindLessonActions } from "../reducers/_main";

const LoadAllLessonsButton = () => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        const { lessonPageFetch } = bindLessonActions(dispatch);
        lessonPageFetch();
    };

    return (
        <button className={"btn btn-info"} onClick={handleButtonClick}>Načítať všetky lekcie</button>
    );
};

export default LoadAllLessonsButton;
