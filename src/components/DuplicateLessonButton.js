import React from 'react';
import { useDispatch } from 'react-redux';
import { AddUserToLessonMutation } from '../queries/AddUserToLessonMutation';
import {AddDuplicateLessonMutation} from "../queries/AddDuplicateLessonMutation";
import {AddFacilityToLessonMutation} from "../queries/AddFacilityToLessonMutation";
import {AddGroupToLessonMutation} from "../queries/AddGroupToLessonMutation";
import {actions} from "../pages/AppProvider";

const DuplicateLessonButton = ({ lesson }) => {
    const dispatch = useDispatch();

    const onClickDuplicate = async () => {
        try {
            console.log("duplicating...")
            const response = await AddDuplicateLessonMutation({ lesson });
            const data = await response.json();

            if (data.data.plannedLessonInsert.msg === 'ok') {
                var updatedLesson = data.data.plannedLessonInsert.lesson;
                console.log("duplicating...ok")

                dispatch(actions.onLessonAdd(updatedLesson));
                for(const user of lesson.users) {
                    const response = await AddUserToLessonMutation({lessonId: updatedLesson.id, userId: user.id});
                    const data = await response.json();

                    if (data.data.plannedLessonUserInsert.msg === 'ok') {
                        updatedLesson = data.data.plannedLessonUserInsert.lesson;
                        dispatch(actions.onLessonUpdate(updatedLesson));
                    }
                    else
                    {
                        console.log("error")
                    }
                }
                for(const facility of lesson.facilities) {
                    const response = await AddFacilityToLessonMutation({lessonId: updatedLesson.id, facilityId: facility.id});
                    const data = await response.json();

                    if (data.data.plannedLessonFacilityInsert.msg === 'ok') {
                        updatedLesson = data.data.plannedLessonFacilityInsert.lesson;
                        dispatch(actions.onLessonUpdate(updatedLesson));
                    }
                    else
                    {
                        console.log("error")
                    }
                }
                for(const group of lesson.groups) {
                    const response = await AddGroupToLessonMutation({lessonId: updatedLesson.id, groupId: group.id});
                    const data = await response.json();

                    if (data.data.plannedLessonGroupInsert.msg === 'ok') {
                        updatedLesson = data.data.plannedLessonGroupInsert.lesson;
                        dispatch(actions.onLessonUpdate(updatedLesson));
                    }
                    else
                    {
                        console.log("error")
                    }
                }

                dispatch(actions.setSelectedLesson(updatedLesson));
                }
            else
            {
                console.log("error")
            }

        } catch (error) {
            console.log(error);
        }

    };


    return (
        <button className="btn btn-secondary" onClick={onClickDuplicate}>COPY</button>
    );
};

export default DuplicateLessonButton;
