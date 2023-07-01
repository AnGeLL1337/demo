import React from 'react';
import { useDispatch } from 'react-redux';
import {LinkLessonTopicWithAcTopicAsync} from "../actions/LinkLessonTopicWithAcTopicAsync";





const LinkLessonTopicWithAcTopicButton = ({lessonId, lastchange, topicId, semesterId}) => {
    const dispatch = useDispatch();




    return (
        <button className="btn btn-primary" onClick={() =>
        {dispatch(LinkLessonTopicWithAcTopicAsync({lessonId, lastchange, topicId, semesterId}))}}>
            LinkTopicWithAc
        </button>
    );
};

export default LinkLessonTopicWithAcTopicButton;
