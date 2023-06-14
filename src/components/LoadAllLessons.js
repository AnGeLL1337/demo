import React from 'react';
import { useDispatch } from 'react-redux';
import { LessonPageFetch } from '../reducers/LessonPageAsyncActions';

const LoadAllLessonsButton = () => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(LessonPageFetch());
    };

    return (
        <button className={"btn btn-info"} onClick={handleButtonClick}>Načítať všetky lekcie</button>
    );
};

export default LoadAllLessonsButton;
