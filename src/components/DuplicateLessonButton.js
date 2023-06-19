import React from 'react';
import { useDispatch } from 'react-redux';
import { DuplicateLessonAsync } from '../actions/DuplicateLessonAsync';

/**
 * Button component for duplicating a lesson.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.lesson - The lesson to be duplicated.
 * @returns {JSX.Element} - The rendered DuplicateLessonButton component.
 */
const DuplicateLessonButton = ({ lesson }) => {
    const dispatch = useDispatch();


    return (
        <button className="btn btn-secondary" onClick={() => dispatch(DuplicateLessonAsync({lesson}))}>COPY</button>

    );
};

export default DuplicateLessonButton;
