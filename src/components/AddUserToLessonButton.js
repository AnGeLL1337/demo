import React from 'react';

const AddUserToLessonButton = ({ userId , lessonId }) => {

    const handleClick = () => {
        console.log('AddUserToLessonButton handleClick ' + userId + ' ' + lessonId)
    };

    return (
        <button className="btn btn-primary"  onClick={handleClick}>Add User to Lesson</button>
    );
};

export default AddUserToLessonButton;