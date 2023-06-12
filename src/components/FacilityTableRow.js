import React from "react";
import { useSelector } from "react-redux";
import AddFacilityToLessonButton from "./AddFacilityToLessonButton";

/**
 * Komponenta reprezentujúca jeden riadok v tabuľke so zariadeniami.
 *
 */

export const FacilityTableRow = ({ facility }) => {
    const lesson = useSelector(state => state.lessons);
    const lessonId = Object.keys(lesson);
    return (
        <tr>
            <td>{facility.id}</td>
            <td>{facility.name}</td>
            <td>
                <AddFacilityToLessonButton facilityId={facility.id} lessonId={lessonId} />
            </td>
        </tr>
    );
}