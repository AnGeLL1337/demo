import React from 'react';
import { useDispatch } from 'react-redux';
import { LessonActions } from '../reducers/lessonreducers';
import { AddUserToLessonMutation } from '../queries/AddUserToLessonMutation';
import {AddDuplicateLessonMutation} from "../queries/AddDuplicateLessonMutation";
import {AddFacilityToLessonMutation} from "../queries/AddFacilityToLessonMutation";
import {AddGroupToLessonMutation} from "../queries/AddGroupToLessonMutation";
import {SelectedLessonActions} from "../reducers/selectedLessonReducer";

const DuplicateLessonButton = ({ lesson }) => {
    const dispatch = useDispatch();

    const onClickDuplicate = async () => {
        try {
            console.log("duplicating...")
            const response = await AddDuplicateLessonMutation({ lesson });
            const data = await response.json();

            if (data.data.plannedLessonInsert.msg === 'ok') {
                const updatedLesson = data.data.plannedLessonInsert.lesson;
                console.log("duplicating...ok")

                dispatch(LessonActions.lesson_add(updatedLesson));
                dispatch(SelectedLessonActions.setSelectedLesson(updatedLesson));
                console.time("FOROF")
                for(const user of lesson.users) {
                    const response = await AddUserToLessonMutation({lessonId: updatedLesson.id, userId: user.id});
                    const data = await response.json();

                    if (data.data.plannedLessonUserInsert.msg === 'ok') {
                        const updatedLesson = data.data.plannedLessonUserInsert.lesson;
                        dispatch(LessonActions.lesson_update(updatedLesson));
                        dispatch(SelectedLessonActions.setSelectedLesson(updatedLesson));
                    }
                    else
                    {
                        console.log("error")
                    }
                }
                console.time("FOROF")
                console.time("FOROF2")
                for(const facility of lesson.facilities) {
                    const response = await AddFacilityToLessonMutation({lessonId: updatedLesson.id, facilityId: facility.id});
                    const data = await response.json();

                    if (data.data.plannedLessonFacilityInsert.msg === 'ok') {
                        const updatedLesson = data.data.plannedLessonFacilityInsert.lesson;
                        dispatch(LessonActions.lesson_update(updatedLesson));
                        dispatch(SelectedLessonActions.setSelectedLesson(updatedLesson));
                    }
                    else
                    {
                        console.log("error")
                    }
                }
                console.time("FOROF2")
                console.time("FOROF3")
                for(const group of lesson.groups) {
                    const response = await AddGroupToLessonMutation({lessonId: updatedLesson.id, groupId: group.id});
                    const data = await response.json();

                    if (data.data.plannedLessonGroupInsert.msg === 'ok') {
                        const updatedLesson = data.data.plannedLessonGroupInsert.lesson;
                        dispatch(LessonActions.lesson_update(updatedLesson));
                        dispatch(SelectedLessonActions.setSelectedLesson(updatedLesson));
                    }
                    else
                    {
                        console.log("error")
                    }
                }
                console.time("FOROF3")

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
