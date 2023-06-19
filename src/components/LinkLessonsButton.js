import React from 'react';
import { useDispatch } from 'react-redux';
import {LinkLessonAsync} from "../actions/LinkLessonAsync";





const LinkLessonsButton = ({ lessonId, lastchange, linkedLessonId }) => {
    const dispatch = useDispatch();




    return (
        <button className="btn btn-primary" onClick={() =>
        {dispatch(LinkLessonAsync({lessonId, lastchange, linkedLessonId}))}}>
            Link
        </button>
    );
};

export default LinkLessonsButton;
