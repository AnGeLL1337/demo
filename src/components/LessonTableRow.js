import DuplicateLessonButton from "./DuplicateLessonButton";
import UpdateLessonOrderButton from "./UpdateLessonOrderButton";
import {useState} from "react";
import {LessonTypeSelectBox} from "./LessonTypeSelectBox";
import DeleteLessonButton from "./DeleteLessonButton";

/**
 * Komponenta reprezentujúca jeden riadok v tabuľke s lekciami.
 *
 * @param {Object} lesson - Objekt predstavujúci selectedLesson, obsahujúci vlastnosti id, name, lastchange a user.
 * @param {Object} actions - Objekt s akciami, ktoré sa majú vykonať pri kliknutí na tlačidlá v riadku.
 * @param {Function} actions.onLessonRemove - Funkcia pre vymazanie selectedLesson zo storu.
 * @returns {JSX.Element} JSX.Element
 */
export  const LessonTableRow = ({lesson, actions}) => {
    const [order, setOrder] = useState(lesson.order);

    const onOrderChange = (event) => {
        setOrder(Number(event.target.value))
    };

    return (
        <tr>
            <td>{lesson.id}</td>
            <td>{lesson.name}</td>
            <td>{lesson.lastchange}</td>
            <td>{lesson.order}</td>
            <td><LessonTypeSelectBox lesson={lesson}></LessonTypeSelectBox></td>
            <td>
                <input className="w-25" type="number" value={order} onChange={onOrderChange} ></input>
                <UpdateLessonOrderButton
                    lessonId={lesson.id}
                    lastchange={lesson.lastchange}
                    order={order}
                    actions={actions}
                />
            </td>
            <td>
                <DeleteLessonButton
                    lessonId={lesson.id}
                    lastchange={lesson.lastchange}
                    actions={actions}
                />
            </td>
            <td>
                <DuplicateLessonButton lesson={lesson}/>
            </td>
        </tr>
    )

}