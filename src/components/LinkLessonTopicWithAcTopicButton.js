import React from 'react';
import { useDispatch } from 'react-redux';
import {LinkLessonTopicWithAcTopicAsync} from "../actions/LinkLessonTopicWithAcTopicAsync";



/**
 * The button component to link a lesson topic with a topic from accreditation.
 *
 * @param {Object} props - The component props.
 * @param {string} props.lessonId - The ID of the lesson.
 * @param {Date} props.lastchange - The last change date of the lesson.
 * @param {string} props.topicId - The ID of the topic.
 * @param {string} props.semesterId - The ID of the semester.
 * @returns {JSX.Element} - The rendered button component.
 */

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
