import React from "react";
import {useSelector} from "react-redux";
import {actions} from "./AppProvider";
import {SelectedLessonTable} from "../components/SelectedLessonTable";


/**
 * Komponenta, která poskytuje data a funkce pro práci s lekcemi.
 * @returns
 */
export const SelectedLessonProvider = () => {
    const selectedLesson = useSelector((state) => state.selectedLesson.selectedLesson);

    console.log("SelectedLessonProvider", selectedLesson)

    if (selectedLesson) {
        return <SelectedLessonTable lesson={selectedLesson} actions={actions} />;
    } else {
        return (
            <div>
                Lesson is not selected. Press "Načítať všetky lekcie" and select a lesson.
            </div>
        );
    }
};